import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

import { Feather } from "@expo/vector-icons"
import { BorderlessButton } from "react-native-gesture-handler"

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

export const Content = styled.ScrollView`
  flex: 1;
`

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`

export const MonthContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${RFValue(24)}px;

  margin-top: 10px;
`

export const MonthButton = styled(BorderlessButton)``

export const MonthSelect = styled(Feather)`
  font-size: ${RFValue(24)}px;
`
export const MonthTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
