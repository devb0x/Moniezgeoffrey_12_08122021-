import axios from "axios"

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
