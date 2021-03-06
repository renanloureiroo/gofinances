import React, { useCallback, useState } from "react"

import { ActivityIndicator } from "react-native"

import {
  Container,
  Header,
  UserWrapper,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogOutButton,
  LoadingContainer,
} from "./styles"

import { HighlightCard } from "../../components/HighlightCard"
import {
  TransactionCard,
  TransactionCardData,
} from "../../components/TransactionCard"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native"
import { useTheme } from "styled-components"
import { useAuth } from "../../hooks/useAuth"

export interface DataListProps extends TransactionCardData {
  id: string
}

interface HighlightDataProps {
  amount: string
  lastTransaction: string
}

interface HighlightData {
  deposits: HighlightDataProps
  withDraws: HighlightDataProps
  total: HighlightDataProps
}

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [transactions, setTransactions] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  )

  const { user, SignOut } = useAuth()

  const theme = useTheme()

  const getLastDate = (
    collection: DataListProps[],
    type: "deposit" | "withdraw"
  ) => {
    const collectionFiltered = collection.filter((item) => item.type === type)

    if (collectionFiltered.length === 0) return 0
    const dateLastTransaction = Math.max.apply(
      Math,
      collection
        .filter((collection) => collection.type === type)
        .map((item) => new Date(item.date).getTime())
    )

    return Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
    }).format(new Date(dateLastTransaction))
  }

  const loadTransactions = async () => {
    const dataKey = `@gofinances:transactions_user:${user?.id}`
    try {
      const response = await AsyncStorage.getItem(dataKey)

      const transactions: [] = response ? JSON.parse(response) : []

      let deposit = 0
      let withDraw = 0

      const dataFormatted: DataListProps[] = transactions.map(
        (item: DataListProps) => {
          if (item.type === "deposit") {
            deposit += Number(item.amount)
          } else {
            withDraw += Number(item.amount)
          }

          const amount = Number(item.amount).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })

          const dateFormatted = Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }).format(new Date(item.date))

          return {
            id: item.id,
            type: item.type,
            name: item.name,
            amount,
            date: dateFormatted,
            category: item.category,
          }
        }
      )

      setTransactions(dataFormatted)

      const total = deposit - withDraw

      const lastDeposit = getLastDate(transactions, "deposit")

      const lastWithDraw = getLastDate(transactions, "withdraw")

      const totalInterval =
        lastWithDraw === 0 ? "N??o h?? transa????es." : `01 a ${lastWithDraw}`
      setHighlightData({
        deposits: {
          amount: deposit.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          lastTransaction:
            lastDeposit === 0
              ? "N??o h?? Transa????es"
              : "??ltima entrada dia " + lastDeposit,
        },
        withDraws: {
          amount: withDraw.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          lastTransaction:
            lastWithDraw === 0
              ? "N??o h?? Transa????es"
              : "??ltima sa??da dia " + lastWithDraw,
        },
        total: {
          amount: total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          lastTransaction: totalInterval,
        },
      })

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadTransactions()
    }, [])
  )

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri: user?.photo }} />
                <User>
                  <UserGreeting>Ol??,</UserGreeting>
                  <UserName>{user?.name}</UserName>
                </User>
              </UserInfo>
              <LogOutButton onPress={SignOut}>
                <Icon name="power" />
              </LogOutButton>
            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              lastTransaction={highlightData.deposits.lastTransaction}
              amount={highlightData.deposits.amount}
            />
            <HighlightCard
              type="down"
              title="Sa??das"
              lastTransaction={highlightData.withDraws.lastTransaction}
              amount={highlightData.withDraws.amount}
            />
            <HighlightCard
              type="total"
              title="Total"
              lastTransaction={highlightData.total.lastTransaction}
              amount={highlightData.total.amount}
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>

            <TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  )
}
