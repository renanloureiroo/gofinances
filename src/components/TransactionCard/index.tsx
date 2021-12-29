import React from "react"
import { categories } from "../../utils/categories"

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

export interface TransactionCardData {
  type: "deposit" | "withdraw"
  name: string
  amount: string
  category: string
  date: string
}

interface Props {
  data: TransactionCardData
}

export const TransactionCard = ({ data }: Props) => {
  const category = categories.filter((item) => item.key === data.category)[0]
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "deposit" ? data.amount : "-" + data.amount}
      </Amount>
      <Footer>
        <CategoryContainer>
          <Icon name={category.icon} />
          <Category>{category.name}</Category>
        </CategoryContainer>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}
