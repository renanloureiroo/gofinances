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

interface CategoryProps {
  name: string
  icon: string
}
export interface TransactionCardData {
  type: "deposit" | "withdraw"
  title: string
  amount: string
  category: CategoryProps
  date: string
}

interface Props {
  data: TransactionCardData
}

export const TransactionCard = ({ data }: Props) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === "deposit" ? data.amount : "-" + data.amount}
      </Amount>
      <Footer>
        <CategoryContainer>
          <Icon name={data.category.icon} />
          <Category>{data.category.name}</Category>
        </CategoryContainer>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}
