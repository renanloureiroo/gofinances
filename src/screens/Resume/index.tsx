import React, { useEffect, useState } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"

import { HistoryCard } from "../../components/HistoryCard"

import { Container, Header, Title, Content } from "./styles"
import { categories } from "../../utils/categories"

interface TransactionData {
  type: "deposit" | "withdraw"
  name: string
  amount: string
  category: string
  date: string
}

interface CategoryData {
  name: string
  total: string
  color: string
}

export const Resume = () => {
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([])

  const loadData = async () => {
    const response = await AsyncStorage.getItem("@gofinances:transactions")
    const responseFormatted: [] = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      (transaction: TransactionData) => transaction.type === "withdraw"
    )

    const totalByCategory: CategoryData[] = []

    categories.forEach((category) => {
      let totalSum = 0

      expensives.forEach((expensive: TransactionData) => {
        if (category.key === expensive.category) {
          totalSum += Number(expensive.amount)
        }
      })

      if (totalSum > 0) {
        const total = totalSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })

        totalByCategory.push({
          name: category.name,
          total,
          color: category.color,
        })
      }
    })

    setTotalByCategory(totalByCategory)
  }

  useEffect(() => {
    loadData()
  })
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content>
        {totalByCategory &&
          totalByCategory.map((category) => (
            <HistoryCard
              key={category.name}
              title={category.name}
              amount={category.total}
              color={category.color}
            />
          ))}
      </Content>
    </Container>
  )
}
