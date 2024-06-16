import { FC } from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import { Search } from './Search';
import { EIcon, Icon } from '../../Icon';

interface MenuProps { }

export const Menu: FC<MenuProps> = () => {


  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <NavLink to={'/main'} className=
          {({ isActive }) => (isActive
            ?
            `${styles.item} menuItem hovered ${styles.mobile}`
            :
            `${styles.item} menuItem ${styles.mobile}`)}>Главная
        </NavLink>
        <NavLink to={'/genres'}
          className={({ isActive }) => isActive
            ?
            `${styles.item} menuItem hovered`
            :
            `${styles.item} menuItem`}
        >
          <span>Жанры</span>
          <Icon name={EIcon.GenresN} prop={styles.iconMob} />
          {/* {window.innerWidth <= 1024 ? <Icon name={EIcon.GenresN} /> : 'Жанры'} */}
        </NavLink>
      </nav >
      <Search />
    </div>
  )
};


