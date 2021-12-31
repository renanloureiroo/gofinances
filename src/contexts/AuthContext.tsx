import React, { createContext, ReactNode, useState } from "react"

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={["Renan"]}>{children}</AuthContext.Provider>
  )
}
