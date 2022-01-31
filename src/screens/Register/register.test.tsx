import React from "react"

import { render } from "@testing-library/react-native"
import { Register } from "."
import { ThemeProvider } from "styled-components/native"
import theme from "../../global/styles/theme"

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

describe("Register Screen", () => {
  it("should be open category modal when user click on button", () => {
    const { getByTestId } = render(<Register />, {
      wrapper: Providers,
    })

    const categoryModal = getByTestId("modal-category")
    expect(categoryModal.props.visible).toBe(false)
  })
})
