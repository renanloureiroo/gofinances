import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

interface TypeProps {
  type: "deposit" | "withdraw"
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<TypeProps>`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: center;
  align-items: center;
  max-width: 49%;
  padding: 16px 36px;

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
