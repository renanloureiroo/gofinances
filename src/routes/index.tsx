import React from "react"

import { NavigationContainer } from "@react-navigation/native"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"
import { useAuth } from "../hooks/useAuth"

export const Routes = () => {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {!user.id ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  )
}
