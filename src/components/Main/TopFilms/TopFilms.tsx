import { FC } from 'react';
import styles from './TopFilms.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWidth } from '../../../Store/useWidth';
import { IFilm } from '../../../assets/hook/useSearchFilm';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/scss';
import classNames from 'classnames';
import { EIcon, Icon } from '../../Icon';
import { useRemoveFovourite } from '../../../assets/hook/FavouriteHooks/useRemoveFovourite';


interface TopFilmsProps {
  films: IFilm[]
  top?: boolean
  close?: (e: React.MouseEvent, id: string) => void
}

export const TopFilms: FC<TopFilmsProps> = ({ films, top = false, close = () => { } }) => {
  const width = useWidth(state => state.width);
  const removeFavorite = useRemoveFovourite()

  const handleClickRemove = (e: React.MouseEvent, id: string) => {
    e.preventDefault()

    removeFavorite.mutate(id)
  }

  return (
    <div className={styles.topFilms}>

      {top && <h3 className={styles.title}>Топ 10 фильмов</h3>}
      {/* <h3 className={styles.title}>Топ 10 фильмов</h3> */}

      {width > 1024 ?
        (
          <div className={styles.noMobile}>
            {films?.map((film, index) => (
              <Link to={`/film/${film.title}`} className={styles.poster} key={film.id}>
                {top && <p className={classNames('secondaryBtn', 'hover', styles.numberFilm)}>{index + 1}</p>}
                {!top && <p className={classNames('secondaryBtn', 'hover', styles.close)} onClick={(e) => close(e, film.id.toString())}>
                  <Icon name={EIcon.CloseD} prop={styles.icon} />
                </p>}
                {film.posterUrl
                  ?
                  <LazyLoadImage
                    src={film.posterUrl}
                    alt={film.title}
                    className={styles.img}
                    effect='blur'
                    width={'222px'}
                    height={'334px'}
                  />
                  :
                  <div className={classNames(styles.img, styles.noImg)} >{film.title}</div>
                }
              </Link>
            ))}
          </div>
        )
        :
        (<Swiper
          className={styles.swiper}
          // enabled={(width <= 1024)}
          // init={width <= 1024}
          direction={'horizontal'}
          spaceBetween={40}
          slidesPerView={((width - 40) / (222 + 40))}
        // slidesPerView='auto'

        >

          {films?.map((film, index) => (
            <SwiperSlide
              key={film.id}

            >
              <Link to={`/film/${film.title}`} className={styles.poster}>
                {top && <p className={classNames('secondaryBtn', 'hover', styles.numberFilm)}>{index + 1}</p>}
                {!top && <p className={classNames('secondaryBtn', 'hover', styles.close)} onClick={(e) => handleClickRemove(e, film.id.toString())}>
                  <Icon name={EIcon.CloseD} prop={styles.icon} />
                </p>}
                {film.posterUrl
                  ?
                  <LazyLoadImage
                    src={film.posterUrl}
                    alt={film.title}
                    className={styles.img}
                    effect='blur'
                    width={'222px'}
                    height={'334px'}
                  />
                  :
                  <div className={classNames(styles.img, styles.noImg)} >{film.title}</div>
                }
              </Link>

            </SwiperSlide>
          ))}

        </Swiper>)
      }


    </div >
  )
};


