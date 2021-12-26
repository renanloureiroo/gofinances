import React from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Forms/Input"
import { Container, Form, Header, Title } from "./styles"

export const Register = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Valor" />

        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
