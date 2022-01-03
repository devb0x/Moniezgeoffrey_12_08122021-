import React, {Fragment, useEffect} from "react"

import styles from './UserMainData.module.css'

import Card from '../../UI/Card'

const UserMainData = (props) => {
  console.log(props)

  return (
    <Fragment>
        <h1 className={styles.title}>
          Bonjour <span className={styles.firstname}>{props.userName}</span>
        </h1>
      <div className={styles.message}>
        Félicitation ! Vous avez explosé vos objectifs hier <span role="img" aria-label="hands clap">👏</span>
      </div>

      <aside>
        <Card>
          <img src={require('../../../public/img/calories-icon.svg')} alt="calories icône"/>
          <div className={styles.data}>
            {props.calorie}kCal <br/>
            <span className={`${styles['data-category']}`}>Calories</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/protein-icon.svg')} alt="protéines icône"/>
          <div className={styles.data}>
            {props.protein}g <br />
            <span className={`${styles['data-category']}`}>Protéines</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/carbs-icon.svg')} alt="glucides icône"/>
          <div className={styles.data}>
            {props.carbohydrate}g <br />
            <span className={`${styles['data-category']}`}>Glucides</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/fat-icon.svg')} alt="lipides icône"/>
          <div className={styles.data}>
            {props.lipid}g <br />
            <span className={`${styles['data-category']}`}>Lipides</span>
          </div>
        </Card>
      </aside>

    </Fragment>
  )
}

export default UserMainData

// userName = string
// calorie = number