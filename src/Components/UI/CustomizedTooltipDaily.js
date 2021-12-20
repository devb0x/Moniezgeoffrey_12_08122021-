import React from 'react';

import styles from './CustomizedTooltipDaily.module.css'

function CustomizedTooltipDaily(props) {
  if (props) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.val}>
          {`${props.payload[0]?.value} kg`}
        </p>
        <p className={styles.val}>
          {`${props.payload[1]?.value}` + 'Kcal'}
        </p>
      </div>
    );
  }
  return null
}

export default CustomizedTooltipDaily;
