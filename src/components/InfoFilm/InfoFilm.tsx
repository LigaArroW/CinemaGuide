import { FC } from 'react';
import styles from './InfoFilm.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useGetFilmFilter } from '../../assets/hook/useGetFilmFilter';
import { Rating } from '../Rating';
import { getFullTime } from '../../util/getFullTime';
import { UseQueryResult } from '@tanstack/react-query';
import { IFilm } from '../../assets/hook/useSearchFilm';
import classNames from 'classnames';
import { FavouriteButton } from '../FavouriteButton';
import { useAuth } from '../../Store/useModal';
import { ModalTrailer } from '../ModalTrailer';

interface InfoFilmProps { }

export const InfoFilm: FC<InfoFilmProps> = () => {
  const { title } = useParams()
  const { data }: UseQueryResult<IFilm> = useGetFilmFilter(1, title)
  const setTrailerOpen = useAuth(state => state.setTrailerOpen)
  const isOpenTrailer = useAuth(state => state.trailerOpen)
  // console.log(data);

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
              <Link to={`/film/${data.title}`} className={classNames(styles.btn, 'secondaryBtn', styles.infoBtn)}>О фильме</Link>
              {/* <Link to={`/main/сделать переход`} className={classNames('secondaryBtn', styles.small)}>
                <Icon name={EIcon.FavoriteD} prop={styles.favorite} />
              </Link> */}
              <FavouriteButton id={data.id} />
              {/* <Link to={`/main/сделать переход`} className={classNames('secondaryBtn', styles.small)} onClick={() => refetch()}>
                <Icon name={EIcon.RefreshN} prop={styles.refresh} />
              </Link> */}

            </div>
          </div>

          <img src={data.posterUrl} alt={data.title} className={styles.img} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>О фильме</h3>
          <div className={styles.infoFilmBlock}>
            <div className={styles.infoFilm}>
              <span className={styles.infoTitle}>Язык оригинала</span>
              <span className={styles.infoText}>{data.languages.length > 0 ? data.languages.join(', ') : 'Нет данных'}</span>
            </div>
            <div className={styles.infoFilm}>
              <span className={styles.infoTitle}>Бюджет</span>
              <span className={styles.infoText}>{data.budget ? Number(data.budget).toLocaleString('ru-RU') + ' руб.' : 'Нет данных'}</span>
            </div>
            <div className={styles.infoFilm}>
              <span className={styles.infoTitle}>Выручка</span>
              <span className={styles.infoText}>{data.budget ? Number(data.revenue).toLocaleString('ru-RU') + ' руб.' : 'Нет данных'}</span>
            </div>
            <div className={styles.infoFilm}>
              <span className={styles.infoTitle}>Режиссёр</span>
              <span className={styles.infoText}>{data.director ? data.director : 'Нет данных'}</span>
            </div>
            <div className={styles.infoFilm}>
              <span className={styles.infoTitle}>Продакшен</span>
              <span className={styles.infoText}>{data.production ? data.production : 'Нет данных'}</span>
            </div>
            <div className={styles.infoFilm}>
              <span className={styles.infoTitle}>Награды</span>
              <span className={styles.infoText}>{data.awardsSummary ? data.awardsSummary : 'Нет данных'}</span>
            </div>
          </div>
        </div>
      </div>}
      {isOpenTrailer && data && <ModalTrailer film={data} />}
    </>
  )
};


