import css from './NoticesCategoriesList.module.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import {
  // getOwnNotices,
  // getFavoriteNotices,
  selectNotices,
} from 'redux/selectors';

const NoticesCategoriesList = ({ category }) => {
  // const { pathname } = useLocation();

  /* const pathnameArr = pathname.split('/');
  console.log(pathnameArr); */
  const notices = useSelector(selectNotices);
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
  // else if (category === 'favorite') {
  //   elements = ownNotices.map(item => (
  //     <NoticesCategoryItem
  //       key={item._id}
  //       id={item._id}
  //       src={item.url}
  //       sex={item.sex}
  //       location={item.location}
  //       category={item.category}
  //       birthday={item.birthday}
  //       title={item.title}
  //       price={item.price}
  //       comments={item.comments}
  //       breed={item.breed}
  //       name={item.name}
  //     />
  //   ));
  // }
  else if (category === 'own') {
    elements = notices.map(item => (
      <NoticesCategoryItem
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
