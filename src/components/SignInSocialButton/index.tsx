import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import { SvgProps } from "react-native-svg"
import * as Progress from "react-native-progress"

import { Container, ImageContainer, Title, Content } from "./styles"
import { useTheme } from "styled-components"

interface Props extends RectButtonProps {
  title: string
  svg: React.FC<SvgProps>
  loading: boolean
}

export const SignInSocialButton = ({
  title,
  svg: Svg,
  loading,
  ...rest
}: Props) => {
  const theme = useTheme()
  return (
    <Container {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Content>
        {loading ? (
          <Progress.CircleSnail
            color={[theme.colors.primary, theme.colors.secondary]}
          />
        ) : (
          <Title>{title}</Title>
        )}
      </Content>
    </Container>
  )
}
