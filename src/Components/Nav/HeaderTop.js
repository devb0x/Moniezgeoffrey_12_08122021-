import React from "react"

import styles from './HeaderTop.module.css'

const HeaderTop = () => {
  return (
      <header>
        <div className={`${styles['logo']}`}>
          <img
            src={require('../../public/img/logo_SportSee.png').default} alt="SportSee logo"
          />
        </div>
        <nav className={`${styles['nav-top']}`}>
          <ul>
            <li className={`${styles['nav-top__link']}`}>
              <a href="#">
                Accueil
              </a>
            </li>
            <li className={`${styles['nav-top__link']}`}>
              <a href="#">
                Profil
              </a>
            </li>
            <li className={`${styles['nav-top__link']}`}>
              <a href="#">
                Réglage
              </a>
            </li>
            <li className={`${styles['nav-top__link']}`}>
              <a href="#">
                Communauté
              </a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default HeaderTop