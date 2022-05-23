import axios from "axios"

/**
 * @constant
 * @type {{todayScore: number, keyData: {proteinCount: number, calorieCount: number, lipidCount: number, carbohydrateCount: number},
 * userInfos: {firstName: string, lastName: string, age: number}, id: number}}
 */
const mockedMainData = {
  id: 12,
  userInfos: {
    firstName: 'John Doe',
    lastName: 'Mocked Data',
    age: 47,
  },
  todayScore: 0.75,
  keyData: {
    calorieCount: 12,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50
  }
}

/**
 * @constant
 * @type {{sessions: [{calories: number, kilogram: number, day: string}, {calories: number, kilogram: number, day: string},
 * {calories: number, kilogram: number, day: string}, {calories: number, kilogram: number, day: string},
 * {calories: number, kilogram: number, day: string}, null, null], userId: number}}
 */
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

/**
 * @constant
 * @type {{sessions: [{sessionLength: number, day: number}, {sessionLength: number, day: number}, {sessionLength: number, day: number},
 * {sessionLength: number, day: number}, {sessionLength: number, day: number}, null, null], userId: number}}
 */
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

/**
 * @constant
 * @type {{data: [{kind: number, value: number}, {kind: number, value: number}, {kind: number, value: number},
 * {kind: number, value: number},
 * {kind: number, value: number}, null], kind: {"1": string, "2": string, "3": string, "4": string, "5": string, "6": string},
 * userId: number}}
 */
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

/**
 * mock functions for fake data if no back-end
 * @type {{getUserMainData: (function(): Promise<unknown>), getUserAverageSessions: (function(): Promise<unknown>),
 * getUserActivity: (function(): Promise<unknown>), getUserPerformance: (function(): Promise<unknown>)}}
 */
export const mock = {
  /**
   * @function
   * @returns {Promise<*>}
   */
  getUserMainData: () => {
    return new Promise((resolve) => {
      resolve(mockedMainData)
    })
  },
  /**
   * @function
   * @returns {Promise<*>}
   */
  getUserActivity: () => {
    return new Promise((resolve) => {
      resolve(mockedActivity)
    })
  },
  /**
   * @function
   * @returns {Promise<*>}
   */
  getUserAverageSessions: () => {
    return new Promise((resolve) => {
      resolve(mockedAverageSessions)
    })
  },
  /**
   * @function
   * @returns {Promise<*>}
   */
  getUserPerformance: () => {
    return new Promise((resolve) => {
      resolve(mockedPerformance)
    })
  },
}

/**
 *
 * @type {{getUserMainData: (function(*): Promise<AxiosResponse<any>>), getUserAverageSessions: (function(*): Promise<AxiosResponse<any>>),
 * getUserActivity: (function(*): Promise<AxiosResponse<any>>), getUserPerformance: (function(*): Promise<AxiosResponse<any>>)}}
 */
const serviceBack = {
  /**
   * @function
   * @param userId
   * @returns {Promise<AxiosResponse<*>>}
   */
  getUserMainData: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}`)
      .then((result) => result.data.data)
  },
  /**
   * @function
   * @param userId
   * @returns {Promise<AxiosResponse<*>>}
   */
  getUserActivity: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/activity`)
      .then((result) => result.data.data)
  },
  /**
   * @function
   * @param userId
   * @returns {Promise<AxiosResponse<*>>}
   */
  getUserAverageSessions: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((result) => result.data.data)
  },
  /**
   * @function
   * @param userId
   * @returns {Promise<AxiosResponse<*>>}
   */
  getUserPerformance: (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}/performance`)
      .then((result) => result.data.data)
  }
}

export default serviceBack
