import { StatusBar } from "expo-status-bar"
import React from "react"
import { ThemeProvider } from "styled-components"
import AppLoading from "expo-app-loading"
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins"

import { CategorySelect } from "./src/screens/CategorySelect"

import theme from "./src/global/styles/theme"

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
        <CategorySelect />
      </ThemeProvider>
    )
  }
}
