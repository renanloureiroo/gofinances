import styled, { css } from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize"
import { RectButton } from "react-native-gesture-handler"

interface TypeProps {
  type: "deposit" | "withdraw"
  isActive: boolean
}

export const Container = styled.View<TypeProps>`
  border: 1px solid ${({ theme }) => theme.colors.text};
  max-width: 49%;
  border-radius: ${RFValue(5)}px;

  ${({ theme, type, isActive }) =>
    type === "deposit"
      ? css`
          background: ${isActive ? theme.colors.success_light : "transparent"};
          ${isActive && "border: none;"}
        `
      : css`
          background: ${isActive
            ? theme.colors.attention_light
            : "transparent"};
          ${isActive && "border: none;"}
        `}
`

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 36px;
`

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ type, theme }) =>
    type === "deposit" ? theme.colors.success : theme.colors.attention};
  margin-right: 17px;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`
