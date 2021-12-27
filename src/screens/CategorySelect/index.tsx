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
import { Button } from "../../components/Forms/Button"

interface Category {
  key: string
  name: string
}

interface Props {
  category: Category
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
        <Title>{category.name}</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            isActive={category.key === item.key}
            onPress={() => setCategory({ key: item.key, name: item.name })}
          >
            <Icon name={item.icon} />

            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <ContainerContent>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </ContainerContent>
    </Container>
  )
}
