import { FC, useEffect, useState } from 'react';
import styles from './Favorites.module.scss';
import { useGetAllfavourite } from '../../../assets/hook/FavouriteHooks/useGetAllfavourite';
import { UseQueryResult } from '@tanstack/react-query';
import { IFilm } from '../../../assets/hook/useSearchFilm';
import { TopFilms } from '../../Main/TopFilms';
import { useRemoveFovourite } from '../../../assets/hook/FavouriteHooks/useRemoveFovourite';




interface FavoritesProps { }

export const Favorites: FC<FavoritesProps> = () => {
  const { data, refetch }: UseQueryResult<IFilm[]> = useGetAllfavourite()
  const [films, setFilms] = useState<IFilm[]>(data ? data : [])
  const removeFavorite = useRemoveFovourite()

  const handleRemove = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    removeFavorite.mutate(id, {
      onSuccess: () => {
        refetch()
      }
    })

  }

  useEffect(() => {
    if (data) {
      setFilms(data)
    }
  }, [data])


  return (
    <>
      {films && <div className={styles.favorites}>
        <TopFilms films={films} close={handleRemove} />
      </div>}
    </>
  )
};


