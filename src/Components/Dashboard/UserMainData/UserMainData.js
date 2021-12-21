import React, {Fragment} from "react"

import styles from './UserMainData.module.css'

import Card from '../../UI/Card'

const UserMainData = (props) => {
  // console.log(props.data)

  return (
    <Fragment>
      <h1 className={styles.title}>
        Bonjour <span className={styles.firstname}>{props.data.userInfos.firstName}</span>
      </h1>
      <div className={styles.message}>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>

      <aside>
        <Card>
          <img src={require('../../../public/img/calories-icon.svg')} alt="calories icône"/>
          <div className={styles.data}>
            {props.data.keyData.calorieCount}kCal <br />
            <span className={`${styles['data-category']}`}>Calories</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/protein-icon.svg')} alt="protéines icône"/>
          <div className={styles.data}>
            {props.data.keyData.proteinCount}g <br />
            <span className={`${styles['data-category']}`}>Protéines</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/carbs-icon.svg')} alt="glucides icône"/>
          <div className={styles.data}>
            {props.data.keyData.carbohydrateCount}g <br />
            <span className={`${styles['data-category']}`}>Glucides</span>
          </div>
        </Card>
        <Card>
          <img src={require('../../../public/img/fat-icon.svg')} alt="lipides icône"/>
          <div className={styles.data}>
            {props.data.keyData.lipidCount}g <br />
            <span className={`${styles['data-category']}`}>Lipides</span>
          </div>
        </Card>
      </aside>

    </Fragment>
  )
}

export default UserMainData