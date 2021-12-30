import React, { useEffect, useState } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"

import { VictoryPie } from "victory-native"

import { HistoryCard } from "../../components/HistoryCard"

import { Container, Header, Title, Content, ChartContainer } from "./styles"
import { categories } from "../../utils/categories"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"

interface TransactionData {
  type: "deposit" | "withdraw"
  name: string
  amount: string
  category: string
  date: string
}

interface CategoryData {
  name: string
  total: number
  totalFormatted: string
  color: string
  percent: string
}

export const Resume = () => {
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([])

  const theme = useTheme()

  const loadData = async () => {
    const response = await AsyncStorage.getItem("@gofinances:transactions")
    const responseFormatted: [] = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      (transaction: TransactionData) => transaction.type === "withdraw"
    )
    const expensivesTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionData) => {
        return acumullator + Number(expensive.amount)
      },
      0
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
        const totalFormatted = totalSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })

        const percent = `${((totalSum / expensivesTotal) * 100).toFixed(0)}%`

        totalByCategory.push({
          name: category.name,
          total: totalSum,
          totalFormatted,
          color: category.color,
          percent,
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
      <Content
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
      >
        <ChartContainer>
          <VictoryPie
            data={totalByCategory}
            x="percent"
            y="total"
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: "bold",
                fill: theme.colors.shape,
              },
            }}
            labelRadius={50}
            colorScale={totalByCategory.map((category) => category.color)}
          />
        </ChartContainer>
        {totalByCategory &&
          totalByCategory.map((category) => (
            <HistoryCard
              key={category.name}
              title={category.name}
              amount={category.totalFormatted}
              color={category.color}
            />
          ))}
      </Content>
    </Container>
  )
}
