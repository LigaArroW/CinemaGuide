import { FC } from 'react';
import styles from './Dropdown.module.scss';
import { useSearchFilm } from '../../../../../assets/hook/useSearchFilm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWidth } from '../../../../../Store/useWidth';
import { SearchBlock } from '../SearchBlock';
import ReactDOM from 'react-dom';

interface DropdownProps {
  value: string
  rect?: DOMRect
  setValue: (value: string) => void
}

export const Dropdown: FC<DropdownProps> = ({ value, rect, setValue }) => {
  const searchFilms = useSearchFilm(value);
  const width = useWidth(state => state.width);


  // const handleClickOutside = (event: React.MouseEvent) => {
  //   if (ref.current && !ref.current.contains(event.target as Node)) {

  //     close();
  //   }
  // };


  if (typeof window === "undefined" || !window?.document?.createElement) {
    return null;

  }
  const node = document.querySelector("#dropdown-root");

  if (!node) return null;

  return (
    ReactDOM.createPortal(
      <>
        {
          searchFilms
          && searchFilms.length > 0
          && <Swiper
            className={styles.swiper}
            enabled={(width <= 1024)}
            // init={width <= 1024}
            direction={width <= 1024 ? 'horizontal' : 'vertical'}
            spaceBetween={width <= 1024 ? 16 : 0}
            slidesPerView={2}
            style={{
              left: rect ? rect.left : 0,
              top: rect ? rect.top + rect.height + 24 : 0,
              width: rect ? rect.width : 0
            }}
          // onOrientationchange={() => console.log('onOrientationchange')}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
            {searchFilms.map((film) => (
              // <SearchBlock key={film.id} film={film} />
              <SwiperSlide key={film.id} className={styles.slider}><SearchBlock film={film} setValue={setValue} /></SwiperSlide>
            ))}
          </Swiper>

        }
        {value.length > 0
          && searchFilms
          && searchFilms.length === 0
          &&
          <Swiper
            className={styles.swiper}
            enabled={(width <= 1024)}
            // init={width <= 1024}
            direction={width <= 1024 ? 'horizontal' : 'vertical'}
            spaceBetween={width <= 1024 ? 16 : 0}
            slidesPerView={2}
            style={{
              left: rect ? rect.left : 0,
              top: rect ? rect.top + rect.height + 24 : 0,
              width: rect ? rect.width : 0
            }}
          >
            <SwiperSlide className={styles.slider}>Ничего не найдено</SwiperSlide>
          </Swiper>}


      </>,
      node
    )
  )
};


