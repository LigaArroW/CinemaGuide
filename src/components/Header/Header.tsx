import { FC } from 'react';
import styles from './Header.module.scss';
import { EIcon, Icon } from '../Icon';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { User } from './User';

interface HeaderProps { }

export const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to={'/main'}>
          <Icon name={EIcon.Logo} prop={styles.logo} />
        </Link>
        <Menu />
        <User />

      </div>
    </div>
  )
};


