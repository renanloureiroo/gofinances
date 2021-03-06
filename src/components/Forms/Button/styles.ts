import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled(RectButton)`
  width: 100%;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.secondary};
  padding: 17px;

  border-radius: ${RFValue(5)}px;
  margin-bottom: 17px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`
