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
  title: string
  amount: string
  category: string
  date: string
}

export const TransactionCard = ({
  title,
  amount,
  category,
  date,
}: TransactionProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
      <Footer>
        <CategoryContainer>
          <Icon name="coffee" />
          <Category>{category}</Category>
        </CategoryContainer>
        <Date>{date}</Date>
      </Footer>
    </Container>
  )
}
