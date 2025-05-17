import {
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
  mockUserData,
} from './mockData'

const BASE_URL = 'http://localhost:3000'
const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true'

export const fetchUserActivity = async (userId) => {
  try {
    if (useMockData) {
      return mockUserActivity.data
    }
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching user activity:', error)
    throw error
  }
}

export const fetchUserAverageSessions = async (userId) => {
  try {
    if (useMockData) {
      return mockUserAverageSessions.data
    }
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching user average sessions:', error)
    throw error
  }
}

export const fetchUserPerformance = async (userId) => {
  try {
    if (useMockData) {
      return mockUserPerformance.data
    }
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching user performance:', error)
    throw error
  }
}

export const fetchUserData = async (userId) => {
  try {
    if (useMockData) {
      return mockUserData.data
    }
    const response = await fetch(`${BASE_URL}/user/${userId}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}
