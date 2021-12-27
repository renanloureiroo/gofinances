import React, { useState } from "react"
import { Modal } from "react-native"
import { Button } from "../../components/Forms/Button"
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton"
import { Input } from "../../components/Forms/Input"
import { RadioBox } from "../../components/RadioBox"
import { CategorySelect } from "../CategorySelect"
import {
  Container,
  Form,
  Header,
  Title,
  RadioContainer,
  Fields,
} from "./styles"

interface CategoryProps {
  key: string
  name: string
}

export const Register = () => {
  const [selected, setSelected] = useState<"deposit" | "withdraw">("withdraw")
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)

  const [category, setCategory] = useState<CategoryProps>({
    key: "category",
    name: "Category",
  })

  const handleSelectCategory = ({ key, name }: CategoryProps) => {
    setCategory({ key, name })
  }

  const handleOpenModal = () => {
    setCategoryModalOpen(true)
  }

  const handleCloseModal = () => {
    setCategoryModalOpen(false)
  }

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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenModal}
          />
        </Fields>

        <Button title="Cadastrar" onPress={() => {}} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={handleSelectCategory}
          closeSelectCategory={handleCloseModal}
        />
      </Modal>
    </Container>
  )
}
