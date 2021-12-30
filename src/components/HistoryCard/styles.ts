import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface ContainerProps {
  color: string
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.shape};
  padding: 13px 24px;

  border-radius: ${RFValue(5)}px;

  border-left-width: 5px;

  border-color: ${({ color }) => color};

  margin-bottom: 8px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
