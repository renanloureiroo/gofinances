import React from "react"

import {
  Amount,
  Container,
  Footer,
  Header,
  Icon,
  LastTransaction,
  Title,
} from "./styles"

export const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>

        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 17.400,00</Amount>

        <LastTransaction>Última entrada 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}
