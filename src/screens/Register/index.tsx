import React, { useEffect, useState } from "react"
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native"

import uuid from "react-native-uuid"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useForm } from "react-hook-form"
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native"

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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { navigate }: NavigationProp<ParamListBase> = useNavigation()

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
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: selected,
      category: category.key,
      date: new Date(),
    }

    try {
      const data = await AsyncStorage.getItem("@gofinances:transactions")

      const currentData = data ? JSON.parse(data) : []

      const dataFormatted = [...currentData, newTransaction]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      setSelected("withdraw")
      setCategory({
        key: "category",
        name: "Category",
      })
      reset()

      navigate("Listagem")
    } catch (err) {
      console.error("screen:Register\nmetódo:HandleRegister\nerror", err)
      Alert.alert("Não foi possível salvar")
    }
  }

  useEffect(() => {
    const getTransactions = async () => {
      const data = await AsyncStorage.getItem("@gofinances:transactions")

      console.log(JSON.parse(data!))
      // await AsyncStorage.removeItem(dataKey)
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
