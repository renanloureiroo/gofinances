import styled from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"

interface AmountProps {
  type: "deposit" | "withdraw"
}

export const Container = styled.View`
  width: 100%;
  padding: 17px 24px;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: ${RFValue(5)}px;
  justify-content: center;

  margin-bottom: 16px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Amount = styled.Text<AmountProps>`
  color: ${({ theme, type }) =>
    type === "deposit" ? theme.colors.success : theme.colors.attention};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Footer = styled.View`
  margin-top: 19px;
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
