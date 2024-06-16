import { FC } from 'react';
import styles from './NotFound.module.scss';

interface NotFoundProps { }

export const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className={styles.notFound}>
     <h1 className={styles.title}>
      Страница не найдена
     </h1>
    </div>
  )
};


