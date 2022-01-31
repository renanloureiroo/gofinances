import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
fetchMock.enableMocks()

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native")
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  }
})