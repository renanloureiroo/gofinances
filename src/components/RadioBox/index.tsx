import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import { Container, Icon, Title, Button } from "./styles"

interface RadioBoxProps extends RectButtonProps {
  type: "deposit" | "withdraw"
  isActive: boolean
}

export const RadioBox = ({ type, isActive, ...rest }: RadioBoxProps) => {
  return (
    <Container type={type} isActive={isActive}>
      <Button {...rest}>
        <Icon
          type={type}
          name={type === "deposit" ? "arrow-up-circle" : "arrow-down-circle"}
        />
        <Title>{type === "deposit" ? "Entrada" : "Saída"}</Title>
      </Button>
    </Container>
  )
}
