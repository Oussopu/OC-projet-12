import React, { createContext, useState, useEffect } from 'react'
import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
  fetchUserData,
} from './apiService'
import {
  standardizeUserActivity,
  standardizeUserAverageSessions,
  standardizeUserPerformance,
  standardizeUserData,
} from './dataUtils'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [userActivity, setUserActivity] = useState(null)
  const [userAverageSessions, setUserAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const userId = 12

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [activityRes, sessionsRes, performanceRes, userRes] =
          await Promise.all([
            fetchUserActivity(userId),
            fetchUserAverageSessions(userId),
            fetchUserPerformance(userId),
            fetchUserData(userId),
          ])

        setUserActivity(standardizeUserActivity(activityRes))
        setUserAverageSessions(standardizeUserAverageSessions(sessionsRes))
        setUserPerformance(standardizeUserPerformance(performanceRes))
        setUserData(standardizeUserData(userRes))
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchData()
  }, [userId])

  return (
    <DataContext.Provider
      value={{
        userActivity,
        userAverageSessions,
        userPerformance,
        userData,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
