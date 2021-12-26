import React, { useState } from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Forms/Input"
import { RadioBox } from "../../components/RadioBox"
import { Container, Form, Header, Title, RadioContainer } from "./styles"

export const Register = () => {
  const [selected, setSelected] = useState<"deposit" | "withdraw">("withdraw")

  const handleDeposit = () => {
    setSelected("deposit")
  }
  const handleWithDraw = () => {
    setSelected("withdraw")
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Valor" />

        <RadioContainer>
          <RadioBox
            type="deposit"
            isActive={selected === "deposit"}
            onPress={handleDeposit}
          />
          <RadioBox
            type="withdraw"
            isActive={selected === "withdraw"}
            onPress={handleWithDraw}
          />
        </RadioContainer>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
