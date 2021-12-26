import React from "react"
import { FlatList } from "react-native"
import {
  Container,
  Header,
  Icon,
  Name,
  Title,
  Category,
  Separator,
  ContainerContent,
} from "./styles"

import { categories } from "../../utils/categories"
import { Button } from "../../components/Button"

interface Category {
  key: string
  name: string
}

interface Props {
  category: string
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: Props) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />

            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <ContainerContent>
        <Button title="Selecionar" />
      </ContainerContent>
    </Container>
  )
}
