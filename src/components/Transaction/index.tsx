import React from "react"

import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  Date,
  CategoryContainer,
} from "./styles"

interface TransactionProps {
  type: "deposit" | "withdraw"
}

export const Transaction = () => {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <CategoryContainer>
          <Icon name="coffee" />
          <Category>Vendas</Category>
        </CategoryContainer>
        <Date>13/04/2021</Date>
      </Footer>
    </Container>
  )
}
