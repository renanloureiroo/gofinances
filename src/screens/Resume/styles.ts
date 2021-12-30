import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: ${RFValue(113)}px;
  justify-content: flex-end;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 19px;
`

export const Content = styled.View`
  flex: 1;
  padding: 20px 24px;

  align-items: center;
`

export const ChartContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`
