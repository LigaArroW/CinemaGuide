import { FC } from 'react';
import styles from './Rating.module.scss';
import { EIcon, Icon } from '../Icon';

interface RatingProps {
  star: number,
  small?: boolean
}

export const Rating: FC<RatingProps> = ({ star, small = false }) => {
  const stars = star.toFixed(1).toString().replace('.', ',')

  let backgroundColor;

  if (star <= 4.2) {
    backgroundColor = '#c82020';
  } else if (star <= 6.3) {
    backgroundColor = '#777';
  } else if (star <= 7.5) {
    backgroundColor = '#308e21';
  } else {
    backgroundColor = '#a59400';
  }

  return (
    <div className={`${styles.rating} ${small ? styles.small : ''}`} style={{ backgroundColor }}>
      <Icon name={EIcon.StarN} />
      <span className={styles.stars}>{stars}</span>
    </div>
  )
};


