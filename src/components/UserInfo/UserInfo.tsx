import { FC, useEffect } from 'react';
import styles from './UserInfo.module.scss';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useGetProfile } from '../../assets/hook/useGetProfile';
import { EIcon, Icon } from '../Icon';
import { UserProps } from '../Header/User';
import { UseQueryResult } from '@tanstack/react-query';
import { useWidth } from '../../Store/useWidth';

interface UserInfoProps { }

export const UserInfo: FC<UserInfoProps> = () => {
  const navigate = useNavigate()
  const { data }: UseQueryResult<UserProps> = useGetProfile()
  const width = useWidth(state => state.width)

  useEffect(() => {
    if (!data) {
      navigate('/main')
    }
  }, [data, navigate])

  return (
    <>
      <div className={styles.userInfo}>
        <h3 className={styles.title}>Мой аккаунт</h3>

        <div className={styles.navigateBlock}>
          <NavLink to={'favorite'}
            className={({ isActive }) => isActive
              ?
              `${styles.item} menuItem hovered`
              :
              `${styles.item} menuItem`}
          >
            <Icon name={EIcon.FavoriteD} prop={styles.iconMob} />
            <span>{width <= 1024 ? 'Избранное' : 'Избранные фильмы'}</span>
          </NavLink>
          <NavLink to={'account'}
            className={({ isActive }) => isActive
              ?
              `${styles.item} menuItem hovered`
              :
              `${styles.item} menuItem`}
          >
            <Icon name={EIcon.UserD} prop={styles.iconMob} />
            <span>{width <= 1024 ? 'Настройки' : 'Настройки аккаунта'}</span>
          </NavLink>
        </div>

        <Outlet context={data} />
      </div>

    </>
  )
};


