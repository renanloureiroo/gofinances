import React, { createContext, ReactNode, useState } from "react"

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
  user: User
}

export const AuthContext = createContext({} as IAuthContextData)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: " 1",
          name: "Renan Loureiro",
          email: "renanpl47@gmail.com",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
