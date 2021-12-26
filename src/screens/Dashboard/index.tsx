import React, { useState } from "react"

import Power from "@expo/vector-icons/Feather"

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
  TransactionsContainer,
} from "./styles"
import theme from "../../global/styles/theme"
import { HighlightCard } from "../../components/HighlightCard"
import { TransactionCard } from "../../components/TransactionCard"

interface Transaction {
  id: string
  type: "deposit" | "withdraw"
  title: string
  amount: string
  category: string
  date: string
}

const fake: Transaction[] = [
  {
    id: "1",
    type: "deposit",
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",

    category: "Vendas",

    date: "13/04/2021",
  },
  {
    id: "2",
    type: "withdraw",
    title: "Desenvolvimento de site",
    amount: "R$ 3.000,00",

    category: "Alimentação",

    date: "13/04/2021",
  },
]

export const Dashboard = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(fake)
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
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          lastTransaction="Última entrada dia 13 de abril"
          amount="R$ 17.400,00"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          lastTransaction="Última entrada dia 13 de abril"
          amount="R$ 17.400,00"
        />
        <HighlightCard
          type="total"
          title="Total"
          lastTransaction="Última entrada dia 13 de abril"
          amount="R$ 17.400,00"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard
          type="deposit"
          title="Desenvolvimento de site"
          amount="R$ 12.000,00"
          category="Vendas"
          date="13/04/2021"
        />
      </Transactions>
    </Container>
  )
}
