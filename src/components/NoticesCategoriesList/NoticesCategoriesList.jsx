import css from './NoticesCategoriesList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import { useLocation } from 'react-router-dom';
import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import {
  // getOwnNotices,
  getFavoriteNotices,
  selectNotices,
} from 'redux/selectors';

import { fetchFavoriteNotices } from '../../redux/notices/noticesOperations';
import { getAuth } from '../../redux/auth/authSelector';
import { useLocation } from 'react-router-dom';

const NoticesCategoriesList = ({ category }) => {
  // const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isLogin } = useSelector(getAuth);

  /* const pathnameArr = pathname.split('/');
  console.log(pathnameArr); */
  const notices = useSelector(selectNotices);
  const favNotices = useSelector(getFavoriteNotices);
  console.log(favNotices);

  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/');
  const lastPartPath = pathnameArr[pathnameArr.length - 1];

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchFavoriteNotices());
    }
  }, [dispatch, isLogin, lastPartPath]);
  //const ownNotices = useSelector(getOwnNotices);

  // const favorites = useSelector(getFavoriteNotices);
  let elements;
  if (
    category === 'sell' ||
    category === 'for-free' ||
    category === 'lost-found'
  ) {
    elements = notices.map(item => (
      <NoticesCategoryItem
        owner={item.owner}
        key={item._id}
        id={item._id}
        src={item.photo}
        sex={item.sex}
        location={item.location}
        category={item.category}
        birthday={item.birthday}
        title={item.title}
        price={item.price}
        comments={item.comments}
        breed={item.breed}
        name={item.name}
      />
    ));
  } else if (category === 'favorite') {
    elements = favNotices.map(item => (
      <NoticesCategoryItem
        key={item._id}
        id={item._id}
        src={item.url}
        sex={item.sex}
        location={item.location}
        category={item.category}
        birthday={item.birthday}
        title={item.title}
        price={item.price}
        comments={item.comments}
        breed={item.breed}
        name={item.name}
      />
    ));
  } else if (category === 'own') {
    elements = notices.map(item => (
      <NoticesCategoryItem
        owner={item.owner}
        key={item._id}
        id={item._id}
        src={item.photo}
        sex={item.sex}
        location={item.location}
        category={item.category}
        birthday={item.birthday}
        title={item.title}
        price={item.price}
        comments={item.comments}
        breed={item.breed}
        name={item.name}
      />
    ));
  }

  return <ul className={css.list}>{elements}</ul>;
};

NoticesCategoriesList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NoticesCategoriesList;
