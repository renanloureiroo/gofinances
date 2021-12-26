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
} from "./styles"
import theme from "../../global/styles/theme"

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
    </Container>
  )
}
