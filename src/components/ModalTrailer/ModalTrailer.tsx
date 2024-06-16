import { FC, useRef, useState } from 'react';
import styles from './ModalTrailer.module.scss';
import { useAuth } from '../../Store/useModal';
import { EIcon, Icon } from '../Icon';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import { IFilm } from '../../assets/hook/useSearchFilm';

interface ModalTrailerProps {
  film: IFilm
}

export const ModalTrailer: FC<ModalTrailerProps> = ({ film }) => {
  const isOpen = useAuth((state) => state.trailerOpen)
  const [isPlay, setIsPlay] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const setTrailerOpen = useAuth((state) => state.setTrailerOpen)
  const ref = useRef<HTMLDivElement>(null);
  // console.log(url);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {

      setTrailerOpen(false);
      setIsPlay(false)
    }
  };

  return (
    isOpen &&
    <div className={styles.modalTrailer} onClick={handleClickOutside}>
      <div className={styles.modalContainer} ref={ref}>
        <Icon name={EIcon.CloseD} prop={styles.close} onClick={() => setTrailerOpen(false)} />
        {/* akjshdkasdkj */}
        <ReactPlayer
          className={styles.iframe}
          url={film.trailerUrl}
          width='100%'
          height='100%'
          playing={isPlay}
          // playIcon={<Icon name={EIcon.PlayerD} prop={styles.play} />}
          config={{
            youtube: {
              playerVars:
              {
                modestbranding: 1,
                showinfo: 0,
                enablejsapi: 1,
                iv_load_policy: 3,
                rel: 0
              }
            }
          }
          }
          fallback={<Icon name={EIcon.LoaderN} prop={classNames(styles.play, styles.loading)} />}
          onReady={() => setIsPlay(true)}
          onBuffer={() => setIsLoading(true)}
          onBufferEnd={() => setIsLoading(false)}
        />
        <div className={styles.over} onClick={() => setIsPlay(!isPlay)}>
          {/* {isLoading && <Icon name={EIcon.LoaderN} prop={classNames(styles.play, styles.loading)} />}
          {isPlay
            ?
            <Icon name={EIcon.PlayerD} double prop={styles.play} />
            :
            <Icon name={EIcon.PlayerD} prop={classNames(styles.play, styles.playing)} />} */}
          {isPlay
            ?
            <Icon name={EIcon.PlayerD} double prop={styles.play} />
            :
            (isLoading
              ?
              <Icon name={EIcon.LoaderN} prop={classNames(styles.play, styles.loading)} />
              :
              <Icon name={EIcon.PlayerD} prop={classNames(styles.play, styles.playing)} />

            )
          }
          <div className={styles.titleBlock}>{film.title}</div>
        </div>
      </div>
    </div>
  )
};


