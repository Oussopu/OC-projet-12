export const mockUserActivity = {
  data: {
    sessions: [
      { day: '2023-10-01', kilogram: 70, calories: 200 },
      { day: '2023-10-02', kilogram: 72, calories: 220 },
      { day: '2023-10-03', kilogram: 71, calories: 210 },
      { day: '2023-10-04', kilogram: 73, calories: 230 },
      { day: '2023-10-05', kilogram: 74, calories: 240 },
      { day: '2023-10-06', kilogram: 75, calories: 250 },
      { day: '2023-10-07', kilogram: 76, calories: 260 },
    ],
  },
}

export const mockUserAverageSessions = {
  data: {
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 45 },
      { day: 3, sessionLength: 40 },
      { day: 4, sessionLength: 50 },
      { day: 5, sessionLength: 35 },
      { day: 6, sessionLength: 55 },
      { day: 7, sessionLength: 60 },
    ],
  },
}

export const mockUserPerformance = {
  data: {
    kind: {
      1: 'Cardio',
      2: 'Energy',
      3: 'Endurance',
      4: 'Strength',
      5: 'Speed',
      6: 'Intensity',
    },
    data: [
      { value: 80, kind: 1 },
      { value: 120, kind: 2 },
      { value: 140, kind: 3 },
      { value: 50, kind: 4 },
      { value: 200, kind: 5 },
      { value: 90, kind: 6 },
    ],
  },
}

export const mockUserData = {
  data: {
    id: 12,
    userInfos: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
    todayScore: 0.2,
    keyData: {
      calorieCount: 2000,
      proteinCount: 150,
      carbohydrateCount: 300,
      lipidCount: 70,
    },
  },
}
