import React, { useState } from "react"
import { Button } from "../../components/Button"
import { CategorySelect } from "../../components/CategorySelect"
import { Input } from "../../components/Forms/Input"
import { RadioBox } from "../../components/RadioBox"
import {
  Container,
  Form,
  Header,
  Title,
  RadioContainer,
  Fields,
} from "./styles"

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
        <Fields>
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

          <CategorySelect />
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  )
}
