import { FC, useEffect, useState } from 'react';
import styles from './FavouriteButton.module.scss';
import classNames from 'classnames';
import { EIcon, Icon } from '../Icon';
import { useGetAllfavourite } from '../../assets/hook/FavouriteHooks/useGetAllfavourite';
import { IFilm } from '../../assets/hook/useSearchFilm';
import { UseQueryResult } from '@tanstack/react-query';
import { useAddToFavourite } from '../../assets/hook/FavouriteHooks/useAddToFavourite';
import { useRemoveFovourite } from '../../assets/hook/FavouriteHooks/useRemoveFovourite';
import { useGetProfile } from '../../assets/hook/useGetProfile';
import { useAuth } from '../../Store/useModal';

interface FavouriteButtonProps {
  id: number
}

export const FavouriteButton: FC<FavouriteButtonProps> = ({ id }) => {
  const [isFavourite, setIsFavourite] = useState(false)
  const { data }: UseQueryResult<IFilm[]> = useGetAllfavourite()
  const profile = useGetProfile()
  const setOpen = useAuth(state => state.setOpen)
  const addToFavourite = useAddToFavourite()
  const removeToFavourite = useRemoveFovourite()


  useEffect(() => {
    if (!data) return
    if (data.find((item) => item.id === id)) {
      console.log('нашел');
      setIsFavourite(true)
    }else{
      setIsFavourite(false)
    }
  }, [data, id])

  const handleClick = () => {
    if (!data) return
    if (!profile.data.email) {
      setOpen(true)
      return
    }
    if (isFavourite) {
      return removeToFavourite.mutate(id.toString(), {
        onSuccess: () => {
          setIsFavourite(false)
        }
      })
    }

    return addToFavourite.mutate(id.toString(), {
      onSuccess: () => {
        setIsFavourite(true)
      },
    })
  }

  return (
    <button className={classNames('secondaryBtn', styles.small)} onClick={handleClick}>
      <Icon name={EIcon.FavoriteD} prop={styles.favorite} double={isFavourite} />
    </button>
  )
};


