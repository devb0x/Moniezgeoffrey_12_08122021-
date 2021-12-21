import React from "react"

import styles from './CustomizedTooltipSessions.module.css'

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