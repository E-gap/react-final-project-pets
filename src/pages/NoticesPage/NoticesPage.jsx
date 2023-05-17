import css from './NoticesPage.module.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
// import NoticesFilters from 'components/NoticesFilters/NoticesFilters';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import AddPetButton from 'components/Buttons/AddPetButton/AddPetButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPets, fetchPetById } from '../../redux/pets/petsOperations';
import { selectPets, selectOnePet } from '../../redux/selectors';

//import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import axios from 'axios';

//import url from './4.jpg';
/* const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
}); */

const NoticesPage = () => {
  const [pathFilter, setPathFilter] = useState('sell');
  //const [onePet, setOnePet] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    const params = searchParams.get('query');
    return params ? params : '';
  });

  // eslint-disable-next-line no-unused-vars
  //const [list, setList] = useState(initialState);
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const onePet = useSelector(selectOnePet);

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

  /* const fetchPetById = async id => {
    try {
      const response = await instance.get(`/notices/${id}`);
      await setOnePet(response.data);
      //console.log(onePet);
      console.log(response);

      if (response.status !== 200) {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }; */

  const handleLearnMore = e => {
    if (e.target.parentNode.getAttribute('id') || e.target.getAttribute('id')) {
      const idNotice =
        e.target.getAttribute('id') || e.target.parentNode.getAttribute('id');
      console.log(idNotice);
      fetchPetById(idNotice);
      dispatch(fetchPetById(idNotice));
    }
  };

  console.log(onePet);

  return (
    <div className={css.container} onClick={handleLearnMore}>
      <NoticesSearch search={submitSearch} />
      <div className={css.wrap}>
        <NoticesCategoriesNav />
        <AddPetButton className={css.btnAdd} />
      </div>
      {/* <NoticesFilters /> */}
      <NoticesCategoriesList items={pets} />

      {/* <AddToFavorite /> */}
    </div>
  );
};

export default NoticesPage;
