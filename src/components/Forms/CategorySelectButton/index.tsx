import React from "react"
import { TouchableOpacityProps } from "react-native"
import { Category, Container, Icon, Title } from "./styles"

interface Props extends TouchableOpacityProps {
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
