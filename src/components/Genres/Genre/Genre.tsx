import { FC } from 'react';
import styles from './Genre.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';


interface GenreProps {
  genre: string
  posterUrl: string
}

export const Genre: FC<GenreProps> = ({ genre, posterUrl }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/genres/${genre}`)
  }

  return (
    <div className={styles.genre} onClick={handleClick}>
      <LazyLoadImage
        src={posterUrl}
        alt={genre}
        className={styles.img}
        effect='blur'
        width={'100%'}
        height={'100%'}
      />

      <p className={styles.text}>{genre}</p>
    </div>
  )
};


