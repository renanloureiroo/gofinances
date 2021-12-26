import styled from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
  width: ${RFValue(280)}px;

  background: ${({ theme }) => theme.colors.shape};

  padding: 19px 20px ${RFValue(42)}px 23px;
  margin-right: 16px;
  border-radius: ${RFValue(5)}px;
  height: ${RFValue(200)}px;

  justify-content: space-between;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.success};
`

export const Footer = styled.View``

export const Amount = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`
