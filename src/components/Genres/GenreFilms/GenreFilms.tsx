import { FC, useEffect, useState } from 'react';
import styles from './GenreFilms.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EIcon, Icon } from '../../Icon';
import { useGetFilmFilter } from '../../../assets/hook/useGetFilmFilter';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { UseQueryResult } from '@tanstack/react-query';
import { IFilm } from '../../../assets/hook/useSearchFilm';
import classNames from 'classnames';

interface GenreFilmsProps { }

export const GenreFilms: FC<GenreFilmsProps> = () => {
  const { ref } = useInView({ threshold: 0.5 })
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [films, setFilms] = useState<IFilm[]>([])
  const { genre } = useParams()
  const { data }: UseQueryResult<IFilm[]> = useGetFilmFilter(10, '', page, genre)


  useEffect(() => {
    if (!data) return
    if (page === 0) return setFilms(data);
    setFilms(prev => [...prev, ...data])

  }, [data, page])

  const handleClick = (title: string) => {
    navigate(`/film/${title}`)
  }


  return (
    <div className={styles.genreFilms}>
      <Link to={`/genres`} className={styles.link}>
        <Icon name={EIcon.ChevronN} prop={styles.icon} />
        <h4 className={styles.title}>{genre}</h4>
      </Link>

      <div className={styles.films} ref={ref}>

        {films && films.map(({ title, posterUrl, id }) => {

          return (
            <div className={styles.poster} onClick={() => handleClick(title)} key={id}>
              <LazyLoadImage
                key={id}
                src={posterUrl}
                alt={title}
                className={styles.img}
                effect='blur'
                width={'100%'}
                height={'100%'}
              />
            </div>
          )

        })}

      </div>

      {data && data?.length > 0 && <button className={classNames('primaryBtn', styles.btn)} onClick={() => { setPage(page + 1) }}>Показать еще</button>}
      {data && data?.length === 0 && <p className={styles.text}>Ничего не найдено</p>}
    </div>
  )
};


