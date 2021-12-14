import React, {Fragment} from "react"

import styles from './UserMainData.module.css'

import Card from '../../UI/Card'

const UserMainData = (props) => {
  // console.log(this.props.children)

  return (
    <Fragment>
      <h1>
        Bonjour <span className={styles.firstname}>{props.data[0].userInfos.firstName}</span>
      </h1>
      <div>
        Félicitation ! Vous avez explosé vos objectifs hier (handClap icon)
      </div>

      <aside>
        <Card>
          <img src={require('../../../public/img/calories-icon.svg').default} alt="calories icône"/>
          <div className={styles.data}>
            {props.data[0].keyData.calorieCount}kCal <br />
            <span className={`${styles['data-category']}`}>Calories</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/protein-icon.svg').default} alt="protéines icône"/>
          <div className={styles.data}>
            {props.data[0].keyData.proteinCount}g <br />
            <span className={`${styles['data-category']}`}>Protéines</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/carbs-icon.svg').default} alt="glucides icône"/>
          <div className={styles.data}>
            {props.data[0].keyData.carbohydrateCount}g <br />
            <span className={`${styles['data-category']}`}>Glucides</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/fat-icon.svg').default} alt="lipides icône"/>
          <div className={styles.data}>
            {props.data[0].keyData.lipidCount}g <br />
            <span className={`${styles['data-category']}`}>Lipides</span>
          </div>
        </Card>
      </aside>

    </Fragment>
  )
}

export default UserMainData