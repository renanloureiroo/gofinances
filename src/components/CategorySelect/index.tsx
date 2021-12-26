import React from "react"
import { Category, Container, Icon, Title } from "./styles"

interface Props {
  category: string
}

export const CategorySelect = ({ category }: Props) => {
  return (
    <Container>
      <Category>
        <Title>Categoria</Title>
      </Category>
      <Icon name="chevron-down" />
    </Container>
  )
}
