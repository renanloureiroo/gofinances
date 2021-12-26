import React from "react"
import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./styles"

interface RadioBoxProps extends TouchableOpacityProps {
  type: "deposit" | "withdraw"
  isActive: boolean
}

export const RadioBox = ({ type, isActive, ...rest }: RadioBoxProps) => {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon
        type={type}
        name={type === "deposit" ? "arrow-up-circle" : "arrow-down-circle"}
      />
      <Title>{type === "deposit" ? "Entrada" : "Saída"}</Title>
    </Container>
  )
}
