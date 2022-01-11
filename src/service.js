import axios from "axios"

const mockedMainData = {
  id: 12,
  userInfos: {
    firstName: 'Mocked firstName',
    lastName: 'lastName',
    age: 47,
  },
  todayScore: 0.12,
  keyData: {
    calorieCount: 12,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50
  }
}
const mockedActivity = {
  userId: 12,
  sessions: [
    {
      day: '2020-07-01',
      kilogram: 60,
      calories: 150
    },
    {
      day: '2020-07-02',
      kilogram: 60,
      calories: 220
    },
    {
      day: '2020-07-03',
      kilogram: 61,
      calories: 280
    },
    {
      day: '2020-07-04',
      kilogram: 61,
      calories: 290
    },
    {
      day: '2020-07-05',
      kilogram: 60,
      calories: 160
    },
    {
      day: '2020-07-06',
      kilogram: 62,
      calories: 162
    },
    {
      day: '2020-07-07',
      kilogram: 62,
      calories: 390
    }
  ]
}
const mockedAverageSessions = {
  userId: 12,
  sessions: [
    {
      day: 1,
      sessionLength: 45
    },
    {
      day: 2,
      sessionLength: 51
    },
    {
      day: 3,
      sessionLength: 70
    },
    {
      day: 4,
      sessionLength: 35
    },
    {
      day: 5,
      sessionLength: 30
    },
    {
      day: 6,
      sessionLength: 45
    },
    {
      day: 7,
      sessionLength: 60
    }
  ]
}
const mockedPerformance = {
  userId: 12,
  kind: {
    1: 'cardio',
    2: 'energy',
    3: 'endurance',
    4: 'strength',
    5: 'speed',
    6: 'intensity'
  },
  data: [
    {
      value: 80,
      kind: 1
    },
    {
      value: 120,
      kind: 2
    },
    {
      value: 140,
      kind: 3
    },
    {
      value: 50,
      kind: 4
    },
    {
      value: 200,
      kind: 5
    },
    {
      value: 90,
      kind: 6
    }
  ]
}

export const mock = {
  getUserMainData: (userId) => {
    return new Promise((resolve) => {
      resolve(mockedMainData)
    })
  },
  getUserActivity: (userId) => {
    return new Promise((resolve) => {
      resolve(mockedActivity)
    })
  },
  getUserAverageSessions: (userId) => {
    return new Promise((resolve) => {
      resolve(mockedAverageSessions)
    })
  },
  getUserPerformance: (userId) => {
    return new Promise((resolve) => {
      resolve(mockedPerformance)
    })
  },
}

const serviceBack = {
  getUserMainData: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}`)
      .then((result) => result.data.data)
  },
  getUserActivity: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/activity`)
      .then((result) => result.data.data)
  },
  getUserAverageSessions: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((result) => result.data.data)
  },
  getUserPerformance: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then((result) => result.data.data)
  }
}

export default serviceBack
