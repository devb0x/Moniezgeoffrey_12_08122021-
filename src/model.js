import serviceBack, { mock } from "./service"

export default class userAPI {
  static getUserMainData(userId) {
    return serviceBack.getUserMainData(userId)
    // return mock.getUserMainData(userId)
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
    // return mock.getUserActivity(userId)
      .then(data => {
        return {
          userId: data.userId,
          sessions: data.sessions
        }
      })
  }

  static getUserAverageSessions(userId) {
    return serviceBack.getUserAverageSessions(userId)
    // return mock.getUserAverageSessions(userId)
      .then(data => {
        return {
          userId: data.userId,
          sessions: data.sessions
        }
      })
  }

  static getUserPerformance(userId) {
    return serviceBack.getUserPerformance(userId)
    // return mock.getUserPerformance(userId)
      .then(data => {
        return {
          userId: data.userId,
          kind: data.kind,
          data: data.data
        }
      })
  }

}