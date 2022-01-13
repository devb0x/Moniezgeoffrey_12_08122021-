import React from "react"

import styles from './CustomizedTooltipSessions.module.css'
import PropTypes from "prop-types"

/**
 * CustomizedTooltipSessions Component
 * @param props
 * @returns {JSX.Element|null}
 * @constructor
 */
const CustomizedTooltipSessions = (props) => {
  if (props) {
    return (
      <div className={styles.tooltip}>
        {`${props.payload[0]?.value} min`}
      </div>
    )
  }
  return null
}

export default CustomizedTooltipSessions

CustomizedTooltipSessions.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number
  }))
}