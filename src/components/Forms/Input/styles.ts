import { TextInput } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled(TextInput)`
  width: 100%;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  background: ${({ theme }) => theme.colors.shape};

  color: ${({ theme }) => theme.colors.title};

  border-radius: ${RFValue(5)}px;

  padding: 18px 16px;
  margin-bottom: 8px;
`
