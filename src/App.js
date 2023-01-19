import { Route, Routes } from 'react-router';
import HomeWrapper from './wrapper/HomeWrapper';

import { Products } from './components/Products/Products';
import UniqItem from './components/UniqItem/UniqItem';

import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BestFilms from './components/BestFilms/BestFilms';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeWrapper />}>

          <Route path='/' >
            <Route index element={<Products />} />
            <Route path={`/film/:id`} element={<UniqItem />} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )

}

export default App;
