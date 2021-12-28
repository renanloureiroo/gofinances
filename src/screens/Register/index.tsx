import React, { useState } from "react"
import { Modal } from "react-native"
import { useForm } from "react-hook-form"

import { Button } from "../../components/Forms/Button"
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton"
import { InputForm } from "../../components/Forms/inputForm"
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

interface FormData {
  name: string
  amount: string
}

export const Register = () => {
  const [selected, setSelected] = useState<"deposit" | "withdraw">("withdraw")
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)

  const [category, setCategory] = useState<CategoryProps>({
    key: "category",
    name: "Category",
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

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

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      type: selected,
      category: category.key,
    }
    console.log(data)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm placeholder="Nome" control={control} name="name" />
          <InputForm placeholder="Valor" name="amount" control={control} />

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

        <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
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
