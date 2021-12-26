import React from "react"

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
} from "./styles"

import { HighlightCard } from "../../components/HighlightCard"
import {
  TransactionCard,
  TransactionCardData,
} from "../../components/TransactionCard"

export interface DataListListProps extends TransactionCardData {
  id: string
}

export const Dashboard = () => {
  const DATA: DataListListProps[] = [
    {
      id: "1",
      type: "deposit",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "coffee",
      },
      date: "13/04/2021",
    },
    {
      id: "2",
      type: "withdraw",
      title: "Mercado",
      amount: "R$ 2.000,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "13/04/2021",
    },
    {
      id: "2",
      type: "withdraw",
      title: "Fones de ouvido",
      amount: "R$ 1.000,00",
      category: {
        name: "Equipamento",
        icon: "coffee",
      },
      date: "13/04/2021",
    },
  ]

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

        <TransactionList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
