import React from "react"
import { Button, Text, TextInput, View } from "react-native"

export const Profile = () => {
  return (
    <View>
      <Text>Perfil</Text>

      <TextInput
        testID="input-name"
        value="Renan"
        placeholder="Nome"
        autoCorrect={false}
      />
      <TextInput
        testID="input-surname"
        value="Loureiro"
        placeholder="Sobrenome"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  )
}
