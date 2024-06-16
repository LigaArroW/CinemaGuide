import { FC, useEffect, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { EIcon, Icon } from '../../../Icon';
import { useWidth } from '../../../../Store/useWidth';
import 'swiper/scss';
import { Dropdown } from './Dropdown';

interface SearchProps { }

export const Search: FC<SearchProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [value, setValue] = useState('');
  const [scroll, setScroll] = useState(true);
  const width = useWidth(state => state.width);
  const ref = useRef<HTMLLabelElement>(null);
  const rect = ref.current?.getBoundingClientRect();

  const isMobile = width <= 1024;


  useEffect(() => {
    if (!isMobile) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isMobile])

  useEffect(() => {

    function scroll() {
      if (window.scrollY > 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    }

    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  }, [])

  const handleClose = () => {
    isMobile && setIsVisible(false)
    setValue('')
  }






  return (
    <div className={styles.search}>
      <div className={styles.searchBlock}>
        {
          isMobile && !isVisible &&
          <Icon
            name={EIcon.SearchN}
            onClick={() => setIsVisible(true)}
            prop={styles.iconMob}
          />
        }


        {isVisible && <label
          htmlFor="search"
          className={styles.label}
          // style={{ minWidth: `${isMobile ? (width - 40 + 'px') : '17%'}` }}
          ref={ref}
        >
          <Icon name={EIcon.SearchN} />
          <input

            type="text"
            id="search"
            className={styles.input}
            placeholder='Поиск'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Icon name={EIcon.CloseD}
            double
            prop={styles.iconClose}
            onClick={() => handleClose()}
          />
        </label>}
      </div>
      {isVisible && scroll && <Dropdown value={value} rect={rect} setValue={setValue} />}

    </div>
  )
};


