import axios from "axios"
import {useState} from "react"
import {useParams} from "react-router-dom"

export async function getUserMainData(id) {
  // id =
  let data

  await axios.get(`http://localhost:3000/user/${id}`).then(res => {
    console.log(res.data.data)
    return data = res.data.data
  })
  .then((data) => {
    return data
  })
}

export function getUserActivity() {
  axios.get('http://localhost:3000/user/18/activity').then(res => {
    // console.log(res.data.keyData)
    return res.data.data
  })
}

export function getUserPerformance() {
  axios.get('http://localhost:3000/user/18/performance').then(res => {
    console.log(res.data.data)
    return res.data.data
  })
}

export function getUserSessions() {
  axios.get('http://localhost:3000/user/18/average-sessions').then(res => {
    // console.warn(res.data.data)
    return res.data.data
  })
}

export default getUserMainData