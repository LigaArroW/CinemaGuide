import { FC } from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames';
import { Burger, Phone, Mail, Check, InfoN, SendN, GenresN, CommentN, StarN, ChevronN, EditN, SearchN, LoaderN, KeyN, UserD, FavoriteD, CloseD, PlayerD, Logo, RefreshN, VK, GitHub, Copyright } from '../icons';
// import Mail from '../../assets/mail.svg?react'


// eslint-disable-next-line react-refresh/only-export-components
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

export const Icon: FC<IconProps> = ({ name, theme, double = false, onClick, prop }) => {
  const componentArray = [
    <Burger />,
    <Mail />,
    <Phone />,
    <Copyright />,
    <Check />,
    <InfoN />,
    <SendN />,
    <GenresN />,
    <CommentN />,
    <StarN />,
    <ChevronN />,
    <EditN />,
    <SearchN />,
    <LoaderN />,
    <KeyN />,
    <UserD double={double} />,
    <FavoriteD double={double} />,
    <CloseD double={double} />,
    <PlayerD double={double} />,
    <Logo />,
    <RefreshN />,
    <VK />,
    <GitHub />
  ]

  const style = classNames(
    styles[`${theme ? 'theme' : 'noTheme'}`], `${prop ? prop : ''}`, styles.display
  )

  return (
    <span className={style} onClick={onClick} >

      {componentArray.find(names => {
        if(name === 'Mail'){
          console.log(names.type.name, name);
          console.log(names);
          
        }
        
        return names.type.name === name
      })}
    </span>
  )
};


