import React, { createContext, ReactNode, useEffect, useState } from "react"
import * as AuthSession from "expo-auth-session"
import * as AppleAuthentication from "expo-apple-authentication"

import AsyncStorage from "@react-native-async-storage/async-storage"

interface AuthContextProps {
  children: ReactNode
}

interface User {
  id: string
  email: string
  name: string
  photo?: string
}

interface IAuthContextData {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signInWithApple: () => Promise<void>
  SignOut: () => Promise<void>
  rehydrating: boolean
}

interface AuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}

export const AuthContext = createContext({} as IAuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const CLIENT_ID = process.env.CLIENT_ID
  const REDIRECT_URI = process.env.REDIRECT_URI
  const [user, setUser] = useState<User | null>(null)

  const [rehydrating, setRehydrating] = useState(true)

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const RESPONSE_TYPE = "token"
      const SCOPE = encodeURI("profile email")

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        )

        const userInfo = await response.json()

        const user: User = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        }

        setUser(user)
        await AsyncStorage.setItem("@gofinances:user", JSON.stringify(user))
      }
    } catch (err) {
      throw new Error(err as string)
    }
  }

  const signInWithApple = async (): Promise<void> => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      })

      if (credential) {
        const name = credential.fullName!.givenName!

        const photo = `https://ui-avatars.com/api/?name=${name}&length=1`

        const user: User = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo,
        }

        setUser(user)
        await AsyncStorage.setItem("@gofinances:user", JSON.stringify(user))
      }
    } catch (err) {
      throw new Error(err as string)
    }
  }

  const SignOut = async (): Promise<void> => {
    await AsyncStorage.removeItem("@gofinances:user")
    setUser(null)
  }

  useEffect(() => {
    const loadUser = async (): Promise<void> => {
      const response = await AsyncStorage.getItem("@gofinances:user")
      if (response) {
        const user = JSON.parse(response)

        setUser(user)
      }
      setRehydrating(false)
    }

    loadUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        rehydrating,
        signInWithGoogle,
        signInWithApple,
        SignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
