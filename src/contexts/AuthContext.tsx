import React, { createContext, ReactNode, useState } from "react"
import * as AuthSession from "expo-auth-session"

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
}

interface AuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}

export const AuthContext = createContext({} as IAuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null)

  const signInWithGoogle = async () => {
    try {
      const RESPONSE_TYPE = "token"
      const SCOPE = encodeURI("profile email")

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

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
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
