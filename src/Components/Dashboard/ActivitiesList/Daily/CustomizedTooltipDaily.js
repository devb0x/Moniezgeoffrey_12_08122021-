import React from 'react';
import PropTypes from "prop-types"

import styles from './CustomizedTooltipDaily.module.css'

const CustomizedTooltipDaily = (props) => {
  if (props) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.val}>
          {`${props.payload[0]?.value} kg`}
        </p>
        <p className={styles.val}>
          {`${props.payload[1]?.value} Kcal`}
        </p>
      </div>
    );
  }
  return null
}

export default CustomizedTooltipDaily;

CustomizedTooltipDaily.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number
  }))
}
