import { FC } from 'react';
import styles from './Genres.module.scss';
import { useGenresAsImage } from '../../assets/hook/useGenresAsImage';
import { Genre } from './Genre/Genre';


interface GenresProps { }

export const Genres: FC<GenresProps> = () => {
  const genres = useGenresAsImage()


  return (
    <div className={styles.genres}>
      <h2 className={styles.title}>Жанры фильмов</h2>
      <div className={styles.genresBlock}>
        {
          genres.map(({ genre, posterUrl }) => {
            return (
              <Genre key={genre} genre={genre} posterUrl={posterUrl} />
            )
          })
        }
      </div>
    </div>
  )
};


