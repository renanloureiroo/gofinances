import React, { useEffect, useState } from "react"
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useForm } from "react-hook-form"

import AsyncStorage from "@react-native-async-storage/async-storage"

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

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),

  amount: yup
    .number()
    .typeError("Informe um valor numérico")
    .positive("O valor não pode ser negativo")
    .required("Valor é obrigatório"),
})

export const Register = () => {
  const [selected, setSelected] = useState<"deposit" | "withdraw">("withdraw")
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)

  const [category, setCategory] = useState<CategoryProps>({
    key: "category",
    name: "Category",
  })

  const dataKey = "@gofinances:transactions"
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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

  const handleRegister = async (form: FormData) => {
    if (category.key === "category") {
      Alert.alert("Selecione uma categoria")
    }

    const data = {
      name: form.name,
      amount: form.amount,
      type: selected,
      category: category.key,
    }

    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(data))
    } catch (err) {
      console.error("screen:Register\nmetódo:HandleRegister\nerror", err)
      Alert.alert("Não foi possível salvar")
    }
  }

  useEffect(() => {
    const getTransactions = async () => {
      const data = await AsyncStorage.getItem("@gofinances:transactions")

      console.log(JSON.parse(data!))
    }
    getTransactions()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              placeholder="Nome"
              control={control}
              name="name"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              keyboardType="numeric"
              placeholder="Valor"
              name="amount"
              control={control}
              error={errors.amount && errors.amount.message}
            />

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
    </TouchableWithoutFeedback>
  )
}
