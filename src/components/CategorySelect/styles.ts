import styled from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  margin-top: 16px;

  background: ${({ theme }) => theme.colors.shape};

  border-radius: ${RFValue(5)}px;
`

export const Category = styled.View``

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`
