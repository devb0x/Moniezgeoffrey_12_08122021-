import React from "react"

import styles from './NavLeft.module.css'

const NavLeft = () => {
  return (
    <nav className={`${styles['nav-left']}`}>
      <ul>
        <li className={`${styles['nav-left__link']}`}>
          <a href="/">
            <img src={require('../../public/img/sport1.svg')} alt={'icon sport'} />
          </a>
        </li>
        <li className={`${styles['nav-left__link']}`}>
          <a href="/">
            <img src={require('../../public/img/sport2.svg')} alt={'icon sport'} />
          </a>
        </li>
        <li className={`${styles['nav-left__link']}`}>
          <a href="/">
            <img src={require('../../public/img/sport3.svg')} alt={'icon sport'}/>
          </a>
        </li>
        <li className={`${styles['nav-left__link']}`}>
          <a href="/">
            <img src={require('../../public/img/sport4.svg')} alt={'icon sport'} />
          </a>
        </li>
      </ul>
      <div className={`${styles['rotate']}`}>
        <p className={`${styles['nav-left__copyright']}`}>Copyright, SportSee 2020</p>
      </div>
    </nav>
  )
}

export default NavLeft