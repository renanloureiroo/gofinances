import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Dashboard } from "../screens/Dashboard"
import { Register } from "../screens/Register"

export const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator>
      <Screen name="Listagem" component={Dashboard} />
      <Screen name="Cadastrar" component={Register} />
      <Screen name="Resumo" component={Register} />
    </Navigator>
  )
}
