import React from "react"
import { Category, Container, Icon, Title } from "./styles"

export const CategorySelect = () => {
  return (
    <Container>
      <Category>
        <Title>Categoria</Title>
      </Category>
      <Icon name="chevron-down" />
    </Container>
  )
}
