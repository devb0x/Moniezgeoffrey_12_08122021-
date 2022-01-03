import serviceBack from "./service"

export default class userAPI {
  static getUserMainData(userId) {
    return serviceBack.getUserMainData(userId)
      .then(data => {
        return {
          id: data.id,
          userInfos: data.userInfos,
          score: data.score || data.todayScore,
          keyData: data.keyData
        }
      })
  }

  static getUserActivity(userId) {
    return serviceBack.getUserActivity(userId)
      .then(data => {
        return {
          userId: data.userId,
          sessions: data.sessions
        }
      })
  }

  static getUserAverageSessions(userId) {
    return serviceBack.getUserAverageSessions(userId)
      .then(data => {
        return {
          userId: data.userId,
          sessions: data.sessions
        }
      })
  }

  static getUserPerformance(userId) {
    return serviceBack.getUserPerformance(userId)
      .then(data => {
        return {
          userId: data.userId,
          kind: data.kind,
          data: data.data
        }
      })
  }

}