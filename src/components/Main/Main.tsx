import { FC } from 'react';
import styles from './Main.module.scss';
import { useGetRandomFilm } from '../../assets/hook/useGetRandomFilm';
import { TopFilms } from './TopFilms';
import { Rating } from '../Rating';
import { getFullTime } from '../../util/getFullTime';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { EIcon, Icon } from '../Icon';
import { FavouriteButton } from '../FavouriteButton';
import { useGetTopFilm } from '../../assets/hook/useGetTopFilm';
import { useAuth } from '../../Store/useModal';
import { ModalTrailer } from '../ModalTrailer';


interface MainProps {

}

export const Main: FC<MainProps> = () => {
  const { data, refetch } = useGetRandomFilm()
  const topFilms = useGetTopFilm();
  const setTrailerOpen = useAuth(state => state.setTrailerOpen)
  const isOpenTrailer = useAuth(state => state.trailerOpen)

  const handleOpenTrailer = () => {
    setTrailerOpen(!isOpenTrailer)
  }


  return (
    <>
      {data && <div className={styles.main}>
        <div className={styles.randomFilm}>
          <div className={styles.descriptBlock}>
            <div className={styles.topDescript}>
              <Rating star={data.tmdbRating} />
              <span className={styles.year}>{data.releaseYear}</span>
              <span className={styles.genres}>{data.genres.join(', ')}</span>
              <span className={styles.contin}>{getFullTime(data.runtime)}</span>
            </div>
            <h2 className={styles.title}>{data.title}</h2>
            <p className={styles.descript}>{data.plot}</p>
            <div className={styles.contols}>
              {/* <Link to={`/main/сделать переход`} className={classNames(styles.btn, 'primaryBtn', styles.trailer)}>Трейлер</Link> */}
              <button className={classNames(styles.btn, 'primaryBtn', styles.trailer)} onClick={handleOpenTrailer}>Трейлер</button>
              <Link to={`/film/${data.title}`} className={classNames(styles.btn, 'secondaryBtn', styles.info)}>О фильме</Link>
              <FavouriteButton id={data.id} />
              {/* <button className={classNames('secondaryBtn', styles.small)} >
                <Icon name={EIcon.FavoriteD} prop={styles.favorite} />
              </button> */}

              <Link to={`/main`} className={classNames('secondaryBtn', styles.small)} onClick={() => refetch()}>
                <Icon name={EIcon.RefreshN} prop={styles.refresh} />
              </Link>

            </div>
          </div>

          <img src={data.posterUrl} alt={data.title} className={styles.img} />
          {/* <LazyLoadImage
            src={data.posterUrl}
            alt={data.title}
            className={styles.img}
            effect='blur'
          // width={'100%'}
          // height={'100%'}
          /> */}
        </div>
        <TopFilms films={topFilms.data} top />
      </div>}
      {isOpenTrailer && data && <ModalTrailer film={data} />}
    </>


  )
};


