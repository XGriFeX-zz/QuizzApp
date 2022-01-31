import { FC } from 'react'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from "./NotFound.module.sass"
import { useNavigate } from 'react-router'

const NotFound: FC = () => {
  const navigate = useNavigate()

  const back = (): void => {
    navigate("/")
  }

  return (
    <div className={styles.error}>
      <div className={styles.error__content}>
        <img src="https://cf.quizizz.com/img/misc/404/locker_optim_900.gif" alt="error" />
        <h1>Not found page</h1>
        <button onClick={back}>
          <FontAwesomeIcon icon={faHouseChimney} />
          Go back
        </button>
      </div>
    </div>
  )
}

export default NotFound