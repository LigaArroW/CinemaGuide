import { FC, useEffect, useState } from 'react';
import styles from './User.module.scss';
import { EIcon, Icon } from '../../Icon';
import classNames from 'classnames';
import { useGetProfile } from '../../../assets/hook/useGetProfile';
import { NavLink } from 'react-router-dom';
import { UseQueryResult } from '@tanstack/react-query';
import { IRegistration } from '../../../assets/hook/useRegistration';
import { useAuth } from '../../../Store/useModal';
import { IFilm } from '../../../assets/hook/useSearchFilm';

export interface UserProps1 {

}

export interface UserProps extends Omit<IRegistration, 'password'> {
  favorites: IFilm[]
}

export const User: FC<UserProps1> = () => {
  const { data }: UseQueryResult<UserProps> = useGetProfile();
  const [user, setUser] = useState(data);
  const setOpen = useAuth(state => state.setOpen)
  // console.log(data);



  useEffect(() => {
    setUser(data)
  }, [data])

  return (
    <>
      {user && user.name ?
        <NavLink to={'/user'}
          className={({ isActive }) => isActive
            ?
            `${styles.item} menuItem hovered`
            :
            `${styles.item} menuItem`}
        >
          {user.name}
        </NavLink>
        :
        <>
          {/* <div className={classNames(styles.user, 'menuItem')} onClick={() => setOpen(true)}> */}
          <div className={classNames(styles.user, 'menuItem')} onClick={() => setOpen(true)}>
            <span>Войти</span>
            <Icon name={EIcon.UserD} prop={styles.iconMob} />
          </div>
          {/* {open && <Login close={() => setOpen(false)} />} */}
        </>
      }
    </>
  )
};


