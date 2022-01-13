import serviceBack, { mock } from "./service"

export default class userAPI {
  /**
   * @function
   * @param userId
   * @returns {Promise<{score, keyData: *, userInfos: *, id: *}>}
   */
  static getUserMainData(userId) {
    return serviceBack.getUserMainData(userId)
    // return mock.getUserMainData()
      .then(data => {
        return {
          id: data.id,
          userInfos: data.userInfos,
          score: data.score || data.todayScore,
          keyData: data.keyData
        }
      })
  }

  /**
   * @function
   * @param userId
   * @returns {Promise<{sessions: *, userId: *}>}
   */
  static getUserActivity(userId) {
    return serviceBack.getUserActivity(userId)
    // return mock.getUserActivity()
      .then(data => {
        return {
          userId: data.userId,
          sessions: data.sessions
        }
      })
  }

  /**
   * @function
   * @param userId
   * @returns {Promise<{sessions: *, userId: *}>}
   */
  static getUserAverageSessions(userId) {
    return serviceBack.getUserAverageSessions(userId)
    // return mock.getUserAverageSessions()
      .then(data => {
        return {
          userId: data.userId,
          sessions: data.sessions
        }
      })
  }

  /**
   * @function
   * @param userId
   * @returns {Promise<{data: *, kind: *, userId: *}>}
   */
  static getUserPerformance(userId) {
    return serviceBack.getUserPerformance(userId)
    // return mock.getUserPerformance()
      .then(data => {
        return {
          userId: data.userId,
          kind: data.kind,
          data: data.data
        }
      })
  }

}