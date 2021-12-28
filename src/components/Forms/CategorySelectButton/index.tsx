import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import { Category, Container, Icon, Title } from "./styles"

interface Props extends RectButtonProps {
  title: string
}

export const CategorySelectButton = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Category>
        <Title>{title}</Title>
      </Category>
      <Icon name="chevron-down" />
    </Container>
  )
}
