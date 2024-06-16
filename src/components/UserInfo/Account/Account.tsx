import { FC } from 'react';
import styles from './Account.module.scss';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { UserProps } from '../../Header/User';
import { useLogout } from '../../../assets/hook/useLogout';
import classNames from 'classnames';
import { createName } from '../../../util/createName';
import { createInicials } from '../../../util/createInicials';
import { EIcon, Icon } from '../../Icon';

interface AccountProps { }

export const Account: FC<AccountProps> = () => {
  const navigate = useNavigate()
  const { refetch } = useLogout()
  const profile: UserProps = useOutletContext()

  const handleClick = () => {
    localStorage.removeItem('auth')
    refetch()
    navigate('/main')
  }


  return (
    <div className={styles.account}>

      <div className={styles.profileBlock}>
        <div className={styles.profile}>
          <div className={styles.ava}>{createInicials(profile.name, profile.surname)}</div>
          <div className={styles.info}>
            <p className={styles.descript}>Имя Фамилия</p>
            <p className={styles.name}>{`${createName(profile.name)} ${createName(profile.surname)}`}</p>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.ava}>
            {<Icon name={EIcon.Mail} prop={styles.icon} />}
          </div>
          <div className={styles.info}>
            <p className={styles.descript}>Электронная почта</p>
            <p className={styles.name}>{profile.email}</p>
          </div>
        </div>
      </div>

      <button onClick={handleClick} className={classNames('primaryBtn', styles.btn)}>Выйти из аккаунта</button>
    </div>
  )
};


