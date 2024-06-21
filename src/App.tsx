import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import './main.global.scss'
import { useWidth } from './Store/useWidth'
import { useEffect } from 'react'
import { Main } from './components/Main'
import { InfoFilm } from './components/InfoFilm'
import { Genres } from './components/Genres'
import { GenreFilms } from './components/Genres/GenreFilms'
import { UserInfo } from './components/UserInfo'
import { useAuth } from './Store/useModal'
import { Login } from './components/Login'
import { Account } from './components/UserInfo/Account'
import { Favorites } from './components/UserInfo/Favorites'
import { NotFound } from './components/NotFound'
import { Footer } from './components/Footer'






function App() {
  const setWidth = useWidth((state) => state.setWidth)
  const isOpen = useAuth((state) => state.isOpen)

  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.round(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [setWidth])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/main' replace />} />
        <Route path='/main' element={<Main />} />
        <Route path='genres'>
          <Route index element={<Genres />} />
          <Route path=':genre' element={<GenreFilms />} />
        </Route>
        <Route path='user' element={<UserInfo />} >
          <Route index element={<Navigate to='favorite' replace />} />
          <Route path='favorite' element={<Favorites />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path='film/:title' element={<InfoFilm />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      {isOpen && <Login />}
      <Footer />
    </>
  )
}

export default App
