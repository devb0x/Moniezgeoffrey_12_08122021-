import React from 'react';

import styles from './CustomizedTooltipDaily.module.css'

function CustomizedTooltipDaily(props) {
  const {payload} = props
  // console.log(props.data)
  // console.log(payload)
  return (
    <div className={styles.tooltip}>
      <p>tooltip</p>
      {`${props.data[1].kilogram}` + 'kg'}
      {`${props.data[1].calories}` + 'kCal'}
    </div>
  );
}

export default CustomizedTooltipDaily;
