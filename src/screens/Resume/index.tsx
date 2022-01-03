import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { VictoryPie } from "victory-native"
import { addMonths, format } from "date-fns"

import { ptBR } from "date-fns/locale"

import { HistoryCard } from "../../components/HistoryCard"

import {
  Container,
  Header,
  Title,
  Content,
  ChartContainer,
  MonthContainer,
  MonthSelect,
  MonthTitle,
  MonthButton,
  LoadingContainer,
} from "./styles"
import { categories } from "../../utils/categories"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { useFocusEffect } from "@react-navigation/native"
import { useAuth } from "../../hooks/useAuth"

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
  label: string
}

export const Resume = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectDate, setSelectDate] = useState<Date>(new Date())
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([])
  const { user } = useAuth()

  const theme = useTheme()

  const handleSelectDate = (action: "next" | "prev") => {
    if (action == "next") {
      setSelectDate((oldDate) => addMonths(oldDate, 1))
    } else {
      setSelectDate((oldDate) => addMonths(oldDate, -1))
    }
  }

  const loadData = async () => {
    const dataKey = `@gofinances:transactions_user:${user?.id}`
    setIsLoading(true)
    const response = await AsyncStorage.getItem(dataKey)
    const responseFormatted: [] = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      (transaction: TransactionData) =>
        transaction.type === "withdraw" &&
        new Date(transaction.date).getMonth() === selectDate.getMonth() &&
        new Date(transaction.date).getFullYear() === selectDate.getFullYear()
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
          label: percent,
        })
      }
    })

    setTotalByCategory(totalByCategory)
    setIsLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [selectDate])
  )
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      ) : (
        <Content
          showsVerticalScrollIndicator={false}
          style={{
            paddingHorizontal: 24,
            paddingBottom: useBottomTabBarHeight(),
          }}
        >
          <MonthContainer>
            <MonthButton onPress={() => handleSelectDate("prev")}>
              <MonthSelect name="chevron-left" />
            </MonthButton>

            <MonthTitle>
              {format(selectDate, "MMMM, yyyy", { locale: ptBR })}
            </MonthTitle>

            <MonthButton onPress={() => handleSelectDate("next")}>
              <MonthSelect name="chevron-right" />
            </MonthButton>
          </MonthContainer>
          <ChartContainer>
            <VictoryPie
              data={totalByCategory}
              x={(data) => data.label}
              y={(data) => data.total}
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
      )}
    </Container>
  )
}
