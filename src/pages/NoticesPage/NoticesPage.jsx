import css from './NoticesPage.module.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

import AddPetButton from 'components/Buttons/AddPetButton/AddPetButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPets } from '../../redux/pets/petsOperations';
import { selectPets } from '../../redux/selectors';

//import { Notify } from 'notiflix/build/notiflix-notify-aio';

//import url from './4.jpg';

/* const initialState = [
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
]; */
const NoticesPage = () => {
  const [pathFilter, setPathFilter] = useState('sell');
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    const params = searchParams.get('query');
    return params ? params : '';
  });
  const { current } = useRef(window.innerWidth);

  // eslint-disable-next-line no-unused-vars
  //const [list, setList] = useState(initialState);
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);

  const { pathname } = useLocation();

  const navigate = useNavigate();
  // const [query, setQuery] = useState('');

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

    const pathnameArr = pathname.split('/');

    const lastPartPath = pathnameArr[pathnameArr.length - 1];

    setPathFilter(lastPartPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const queryParams = {
      category: pathFilter,
      title: query,
    };
    dispatch(fetchAllPets(queryParams));
  }, [dispatch, pathFilter, query]);

  const submitSearch = event => {
    setQuery(event);
    setSearchParams(event !== '' ? { query: event } : {});
  };

  return (
    <div className={css.container}>
      <NoticesSearch
        search={submitSearch}
        title={'Find your favorite pet'}
        query={query}
        setQuery={setQuery}
      />
      <div className={css.wrap}>
        <NoticesCategoriesNav />
        <AddPetButton
          style={
            current <= 767
              ? {
                  position: 'fixed',
                  zIndex: 100,
                  top: '81vh',
                  right: '21px',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  flexDirection: 'column-reverse',

                  lineHeight: '1.37',
                  padding: 0,
                }
              : {}
          }
        />
      </div>
      {/* <NoticesFilters /> */}
      <NoticesCategoriesList items={pets} />

      {/* <AddToFavorite /> */}
    </div>
  );
};

export default NoticesPage;
