import { TextInput } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"
interface Props {
  active: boolean
}

export const Container = styled(TextInput)<Props>`
  width: 100%;
  font-size: ${RFValue(14)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
  background: ${({ theme }) => theme.colors.shape};

  color: ${({ theme }) => theme.colors.title};

  border-radius: ${RFValue(5)}px;

  padding: 18px 16px;
  margin-bottom: 8px;

  ${({ active, theme }) =>
    active &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.attention};
    `}
`
