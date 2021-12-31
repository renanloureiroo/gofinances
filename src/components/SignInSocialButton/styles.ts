import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled(RectButton)`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.shape};
  width: 100%;
  height: ${RFValue(56)}px;
  align-items: center;
  border-radius: ${RFValue(5)}px;
  margin-bottom: 16px;
`

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  margin: 0 auto;
`
