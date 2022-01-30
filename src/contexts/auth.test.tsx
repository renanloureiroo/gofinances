import { AuthContextProvider } from "./AuthContext"
import { useAuth } from "../hooks/useAuth"

import { renderHook, act } from "@testing-library/react-hooks"

const userTest = {
  id: "any_id",
  email: "renanpl47@gmail.com",
  name: "Renan",
  photo: "any_photo.png",
}

jest.mock("expo-auth-session", () => {
  return {
    startAsync: () => ({
      type: "success",
      params: {
        access_token: "any_token",
      },
    }),
  }
})

describe("Auth Hook ", () => {
  it("should be able to sign in with Google account existing", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(userTest))

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContextProvider,
    })
    await act(() => result.current.signInWithGoogle())

    console.log("USER PROFILE =>", result.current.user)

    expect(result.current.user?.email).toBe("renanpl47@gmail.com")
    expect(result.current.user?.email).not.toBe("renan@gmail.com")
  })
})
