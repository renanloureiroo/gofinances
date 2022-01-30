import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
fetchMock.enableMocks()