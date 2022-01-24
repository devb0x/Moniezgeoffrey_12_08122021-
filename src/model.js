import serviceBack, { mock } from "./service"

const service = process.env.REACT_APP_SERVICE_MOCK === 'true' ? mock : serviceBack

export default class userAPI {
  /**
   * @function
   * @param userId
   * @returns {Promise<{score, keyData: *, userInfos: *, id: *}>}
   */
  static getUserMainData(userId) {
    return service.getUserMainData(userId)
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
    return service.getUserActivity(userId)
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
    return service.getUserAverageSessions(userId)
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
    return service.getUserPerformance(userId)
      .then(data => {
        return {
          userId: data.userId,
          kind: data.kind,
          data: data.data
        }
      })
  }

}