import { FC } from 'react';
import styles from './Footer.module.scss';
import { EIcon, Icon } from '../Icon';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface FooterProps { }

export const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.titleBlock}>
        <h5 className={styles.title}>{'LLC\u00A0«Мультимедия\u00A0Визон»'}</h5>
        <div className={styles.copyright}>
          <Icon name={EIcon.Copyright} prop={styles.copyrightIcon} />
          <p className={styles.text}>{'Все\u00A0права\u00A0защищены'}</p>
        </div>
      </div>
      <div className={styles.socialBlock}>
        <Link to={'https://t.me/LigaArroW'}><Icon name={EIcon.SendN} prop={classNames(styles.icon, styles.social)} /></Link>
        <Link to={'https://vk.com/ligaarrow'}><Icon name={EIcon.VK} prop={classNames(styles.icon, styles.social)} /></Link>
        <Link to={'https://github.com/LigaArroW'}><Icon name={EIcon.GitHub} prop={classNames(styles.icon, styles.social)} /></Link>
      </div>
    </div>
  )
};


