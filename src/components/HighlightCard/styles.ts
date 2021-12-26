import styled, { css } from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"

interface TypeProps {
  type: "up" | "down" | "total"
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(280)}px;

  background: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};

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

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  color: ${({ type, theme }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type, theme }) =>
    type === "up" &&
    css`
      color: ${theme.colors.success};
    `}

  ${({ type, theme }) =>
    type === "down" &&
    css`
      color: ${theme.colors.attention};
    `}

    ${({ type, theme }) =>
    type === "total" &&
    css`
      color: ${theme.colors.shape};
    `}
`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ type, theme }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
`

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  color: ${({ type, theme }) =>
    type === "total" ? theme.colors.background : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`
