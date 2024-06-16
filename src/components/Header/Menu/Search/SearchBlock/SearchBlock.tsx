import { FC } from 'react';
import styles from './SearchBlock.module.scss';
import { IFilm } from '../../../../../assets/hook/useSearchFilm';
import { Rating } from '../../../../Rating';
import { getFullTime } from '../../../../../util/getFullTime';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';




interface SearchBlockProps {
  film: IFilm
  setValue: (value: string) => void
}

export const SearchBlock: FC<SearchBlockProps> = ({ film, setValue }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/film/${film.title}`)
    setValue('')
  }


  return (
    <div className={styles.searchBlock} onClick={handleClick}>
      <LazyLoadImage
        src={film.posterUrl}
        alt={film.title}
        className={styles.img}
        effect='blur'
      />

      {/* <img src={film.posterUrl} alt={film.title} className={styles.img} /> */}

      <div className={styles.descript}>
        <div className={styles.information}>
          <span className={styles.raiting}>{<Rating star={film.tmdbRating} small={true} />}</span>
          <span className={styles.year}>{film.releaseYear}</span>
          <span className={styles.genres}>{film.genres.join(', ')}</span>
          <span className={styles.continue}>{getFullTime(film.runtime)}</span>
        </div>
        <h3 className={styles.title}>{film.title}</h3>
      </div>

    </div>
  )
};


