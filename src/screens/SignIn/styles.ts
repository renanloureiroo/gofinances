import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  width: 100%;
`

export const Header = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  width: 100%;
  height: 70%;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
`

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
  margin-bottom: ${RFValue(80)}px;
  margin-top: ${RFValue(45)}px;
`
export const Subtitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  margin-bottom: ${RFValue(67)}px;
`

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background: ${({ theme }) => theme.colors.secondary};
`

export const ButtonsContainer = styled.View`
  width: 100%;
  padding: 0 32px;

  margin-top: ${RFValue(-28)}px;
`
