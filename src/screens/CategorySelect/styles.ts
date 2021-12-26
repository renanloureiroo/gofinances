import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

import { Feather } from "@expo/vector-icons"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
`
export const ContainerContent = styled.View`
  padding: 16px 24px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 19px;
`

export const Category = styled.View`
  flex-direction: row;
  width: 100%;

  padding: ${RFValue(15)}px;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.title};
`
export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.text};
`
