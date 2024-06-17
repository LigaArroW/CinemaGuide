import { FC } from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';
import { Burger, Phone, Mail, Check, InfoN, SendN, GenresN, CommentN, StarN, ChevronN, EditN, SearchN, LoaderN, KeyN, UserD, FavoriteD, CloseD, PlayerD, Logo, RefreshN, VK, GitHub, Copyright } from '../icons';




export enum EIcon {
  Burger = 'Burger',
  Mail = 'Mail',
  Phone = 'Phone',
  Copyright = 'Copyright',
  Check = 'Check',
  InfoN = 'InfoN',
  SendN = 'SendN',
  GenresN = 'GenresN',
  CommentN = 'CommentN',
  StarN = 'StarN',
  ChevronN = 'ChevronN',
  EditN = 'EditN',
  SearchN = 'SearchN',
  LoaderN = 'LoaderN',
  KeyN = 'KeyN',
  UserD = 'UserD',
  FavoriteD = 'FavoriteD',
  CloseD = 'CloseD',
  PlayerD = 'PlayerD',
  Logo = 'Logo',
  RefreshN = 'RefreshN',
  VK = 'VK',
  GitHub = 'GitHub'
}

type TTheme = boolean

interface IconProps {
  name: EIcon
  theme?: TTheme
  double?: boolean
  onClick?: () => void
  prop?: string
}

const renderComponent = (name: EIcon, double = false) => {
  switch (name) {
    case EIcon.Burger:
      return <Burger />
    case EIcon.Mail:
      return <Mail />
    case EIcon.Phone:
      return <Phone />
    case EIcon.Copyright:
      return <Copyright />
    case EIcon.Check:
      return <Check />
    case EIcon.InfoN:
      return <InfoN />
    case EIcon.SendN:
      return <SendN />
    case EIcon.GenresN:
      return <GenresN />
    case EIcon.CommentN:
      return <CommentN />
    case EIcon.StarN:
      return <StarN />
    case EIcon.ChevronN:
      return <ChevronN />
    case EIcon.EditN:
      return <EditN />
    case EIcon.SearchN:
      return <SearchN />
    case EIcon.LoaderN:
      return <LoaderN />
    case EIcon.KeyN:
      return <KeyN />
    case EIcon.UserD:
      return <UserD double={double} />
    case EIcon.FavoriteD:
      return <FavoriteD double={double} />
    case EIcon.CloseD:
      return <CloseD double={double} />
    case EIcon.PlayerD:
      return <PlayerD double={double} />
    case EIcon.Logo:
      return <Logo />
    case EIcon.RefreshN:
      return <RefreshN />
    case EIcon.VK:
      return <VK />
    case EIcon.GitHub:
      return <GitHub />
    case EIcon.Mail:
      return <Mail />
    default:
      return ''
  }
}


export const Icon: FC<IconProps> = ({ name, theme, double = false, onClick, prop }) => {

  const style = classNames(
    styles[`${theme ? 'theme' : 'noTheme'}`], `${prop ? prop : ''}`, styles.display
  )

  return (
    <span className={style} onClick={onClick} >
      {renderComponent(name, double)}
    </span>
  )
};


