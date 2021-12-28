import { StatusBar } from "expo-status-bar"
import React from "react"
import { ThemeProvider } from "styled-components"
import AppLoading from "expo-app-loading"

import { NavigationContainer } from "@react-navigation/native"

import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins"

import theme from "./src/global/styles/theme"
import { AppRoutes } from "./src/routes/app.routes"
import { GestureHandlerRootView } from "react-native-gesture-handler"

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
        <NavigationContainer>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <AppRoutes />
          </GestureHandlerRootView>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}
