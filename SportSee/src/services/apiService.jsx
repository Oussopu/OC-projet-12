const BASE_URL = 'http://localhost:3000'

export const fetchUserActivity = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.data
}

export const fetchUserAverageSessions = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.data
}

export const fetchUserPerformance = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.data
}

export const fetchUserData = async (userId) => {
  const response = await fetch(`${BASE_URL}/user/${userId}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.data
}
