import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Platform } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"

import { MaterialIcons } from "@expo/vector-icons"

import theme from "../global/styles/theme"

import { Dashboard } from "../screens/Dashboard"
import { Register } from "../screens/Register"
import { Resume } from "../screens/Resume"

export const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 14,
        },
        tabBarStyle: {
          height: 72 + getBottomSpace(),
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
