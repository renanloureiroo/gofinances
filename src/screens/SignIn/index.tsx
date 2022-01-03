import React, { useState } from "react"
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
import { useAuth } from "../../hooks/useAuth"
import { Alert } from "react-native"

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { signInWithGoogle, signInWithApple } = useAuth()

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true)
      return await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível conectar a conta Google")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignInWithApple = async () => {
    try {
      setIsLoading(true)
      return await signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível conectar a conta Apple")
    } finally {
      setIsLoading(false)
    }
  }

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
            onPress={handleSignInWithGoogle}
            loading={isLoading}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={Apple}
            onPress={handleSignInWithApple}
            loading={isLoading}
          />
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}
