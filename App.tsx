import { StatusBar } from "expo-status-bar"
import React from "react"
import "intl"
import "intl/locale-data/jsonp/pt-BR"
import "react-native-gesture-handler"

import { ThemeProvider } from "styled-components"
import AppLoading from "expo-app-loading"

import { Routes } from "./src/routes"

import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins"

import theme from "./src/global/styles/theme"

import { GestureHandlerRootView } from "react-native-gesture-handler"

import { SignIn } from "./src/screens/SignIn"
import { AuthContextProvider } from "./src/contexts/AuthContext"

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent />
        <AuthContextProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
          </GestureHandlerRootView>
        </AuthContextProvider>
      </ThemeProvider>
    )
  }
}
