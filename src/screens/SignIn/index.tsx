import React from "react"
import { RFValue } from "react-native-responsive-fontsize"

import {
  Container,
  Header,
  Title,
  Subtitle,
  Footer,
  ButtonsContainer,
} from "./styles"

import Logo from "../../assets/logo.svg"
import Apple from "../../assets/apple.svg"
import Google from "../../assets/google.svg"
import { SignInSocialButton } from "../../components/SignInSocialButton"

export const SignIn = () => {
  return (
    <Container>
      <Header>
        <Logo width={RFValue(120)} height={RFValue(68)} />

        <Title>{`Controle suas\nfinanças de forma\nmuito simples`}</Title>

        <Subtitle>{`Faça seu login com\numa das contas abaixo`}</Subtitle>
      </Header>
      <Footer>
        <ButtonsContainer>
          <SignInSocialButton
            title="Entrar com Google"
            svg={Google}
            onPress={() => {}}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={Apple}
            onPress={() => {}}
          />
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}
