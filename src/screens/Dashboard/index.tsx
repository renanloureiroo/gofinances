import React from "react"

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
} from "./styles"
import theme from "../../global/styles/theme"
import { HighlightCard } from "../../components/HighlightCard"
import { Transaction } from "../../components/Transaction"

export const Dashboard = () => {
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

      <Transaction />
    </Container>
  )
}
