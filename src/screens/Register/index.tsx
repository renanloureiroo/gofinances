import React from "react"
import { Input } from "../../components/Forms/Input"
import { Container, Form, Header, Title } from "./styles"

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Valor" />
      </Form>
    </Container>
  )
}
