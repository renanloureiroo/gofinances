import styled from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
  width: 100%;
  padding: 24px;
  height: ${RFValue(128)}px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: ${RFValue(12)}px;
`

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`
