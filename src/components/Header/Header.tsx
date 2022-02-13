import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from "./Header.module.sass"

const Header: FC = () => {
  return (
    <header className={styles.header__main}>
      <nav className={styles.header__main__navbar}>
        <div className={styles.header__main__navbar__tabs}>
          <Link to="/" className={styles.header__main__navbar__tabs__logo}>
            <img
              src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png" 
              alt="logo" 
            />
          </Link>
          <Link className={styles.link__hover} to="/create">Create quizz</Link>
        </div>
        <div className={styles.header__main__right}>
          <Link
            to="/login"
            className={styles.link__hover}
          >
            Log In
          </Link>
          <Link
              to="/signup"
              className={styles.signup}
            >
              Sign up
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header