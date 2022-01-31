import { AuthContextProvider } from "./AuthContext"
import { useAuth } from "../hooks/useAuth"

import { startAsync } from "expo-auth-session"
import { renderHook, act } from "@testing-library/react-hooks"

import AsyncStorage from "@react-native-async-storage/async-storage"

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
  beforeEach(async () => {
    const userCollectionKey = "@gofinances:user"

    await AsyncStorage.removeItem(userCollectionKey)
  })

  it("should be able to sign in with Google account existing", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(userTest))

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContextProvider,
    })
    await act(() => result.current.signInWithGoogle())

    expect(result.current.user?.email).toBe("renanpl47@gmail.com")
    expect(result.current.user?.email).not.toBe("renan@gmail.com")
  })

  it("user should not connect if cancel authentication with Google", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ type: "cancel" }))
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContextProvider,
    })
    await act(() => result.current.signInWithGoogle())

    expect(result.current.user.id).toBe(undefined)
  })
})
