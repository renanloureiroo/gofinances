import React, { useCallback, useEffect, useState } from "react"

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
} from "./styles"

import { HighlightCard } from "../../components/HighlightCard"
import {
  TransactionCard,
  TransactionCardData,
} from "../../components/TransactionCard"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect } from "@react-navigation/native"

export interface DataListProps extends TransactionCardData {
  id: string
}

interface HighlightDataProps {
  amount: string
}

interface HighlightData {
  deposits: HighlightDataProps
  withDraws: HighlightDataProps
  total: HighlightDataProps
}

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  )
  const loadTransactions = async () => {
    const response = await AsyncStorage.getItem("@gofinances:transactions")

    const transactions: [] = response ? JSON.parse(response) : []

    let deposit = 0
    let withDraw = 0
    let total = 0

    const dataFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "deposit") {
          deposit += Number(item.amount)
          total += Number(item.amount)
        } else {
          withDraw += Number(item.amount)
          total -= Number(item.amount)
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
    setHighlightData({
      deposits: {
        amount: deposit.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      withDraws: {
        amount: withDraw.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    })
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadTransactions()
    }, [])
  )

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/renanloureiroo.png" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Renan</UserName>
            </User>
          </UserInfo>
          <LogOutButton onPress={() => {}}>
            <Icon name="power" />
          </LogOutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          lastTransaction="Última entrada dia 13 de abril"
          amount={highlightData.deposits.amount}
        />
        <HighlightCard
          type="down"
          title="Saídas"
          lastTransaction="Última entrada dia 13 de abril"
          amount={highlightData.withDraws.amount}
        />
        <HighlightCard
          type="total"
          title="Total"
          lastTransaction="Última entrada dia 13 de abril"
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
    </Container>
  )
}
