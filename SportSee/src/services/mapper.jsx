export const standardizeUserActivity = (data) => {
  return data.sessions.map((session) => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories,
  }))
}

export const standardizeUserAverageSessions = (data) => {
  return data.sessions.map((session) => ({
    day: session.day,
    sessionLength: session.sessionLength,
  }))
}

export const standardizeUserPerformance = (data) => {
  return data.data.map((performance) => ({
    subject: data.kind[performance.kind],
    value: performance.value,
  }))
}

export const standardizeUserData = (data) => {
  return {
    id: data.id,
    firstName: data.userInfos.firstName,
    lastName: data.userInfos.lastName,
    age: data.userInfos.age,
    todayScore: data.todayScore || data.score,
    keyData: {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    },
  }
}
