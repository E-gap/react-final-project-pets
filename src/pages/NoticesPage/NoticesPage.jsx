import css from './NoticesPage.module.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

import url from './4.jpg';

const initialState = [
  {
    id: 1,
    option: 'sell',
    region: 'Lviv',
    years: '1',
    sex: 'female',
    title: 'Lorim.',
    url: url,
    favorite: false,
  },
  {
    id: 2,
    option: 'sell',
    region: 'Lviv',
    years: '2',
    sex: 'male',
    title: 'Lorim is a friendly and outgoing dog.',
    url: url,
    favorite: true,
  },

  {
    id: 3,
    option: 'lost',
    region: 'Kiyv',
    years: '2',
    sex: 'male',
    title: 'Lorim is a friendly dog.',
    url: url,
    favorite: true,
  },
  {
    id: 4,
    option: 'in good hand',
    region: 'Odesa',
    years: '3',
    sex: 'female',
    title: 'Lorim is a friendly dog.',
    url: url,
    favorite: false,
  },
  {
    id: 5,
    option: 'in good hand',
    region: 'Kiyv',
    years: '3',
    sex: 'male',
    title: 'Lorim is a friendly dog.',
    url: url,
    favorite: false,
  },
  {
    id: 6,
    option: 'lost',
    region: 'Sumy',
    years: '1',
    sex: 'female',
    title: 'Lorim is a friendly dog.',
    url: url,
    favorite: true,
  },
  {
    id: 7,
    option: 'sell',
    region: 'Lviv',
    years: '5',
    sex: 'female',
    title: 'Lorim is a friendly dog.',
    url: url,
    favorite: false,
  },
  {
    id: 8,
    option: 'sell',
    region: 'Kiyv',
    years: '3',
    sex: 'male',
    title: 'Lorim is a friendly dog.',
    url: url,
    favorite: false,
  },
];
const NoticesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(initialState);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      pathname === '/notices/lost-found' ||
      pathname === '/notices/for-free' ||
      pathname === '/notices/favotire' ||
      pathname === '/notices/own'
    ) {
    } else {
      navigate('/notices/sell');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={css.container}>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <NoticesFilters /> */}
      <NoticesCategoriesList items={list} />
      {/* <AddPetButton /> */}
      {/* <AddToFavorite /> */}
    </div>
  );
};

export default NoticesPage;
