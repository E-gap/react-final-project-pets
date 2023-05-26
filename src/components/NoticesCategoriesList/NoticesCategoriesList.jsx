import css from './NoticesCategoriesList.module.css';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';
import { getFavoriteNotices, selectNotices } from 'redux/selectors';

const NoticesCategoriesList = ({ category }) => {
  const notices = useSelector(selectNotices);
  const favNotices = useSelector(getFavoriteNotices);

  let elements;
  if (
    category === 'sell' ||
    category === 'for-free' ||
    category === 'lost-found'
  ) {
    elements = notices.map(item => (
      <NoticesCategoryItem
        favorite={item.favorite}
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
        favorite={item.favorite}
        owner={item.owner}
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
        favorite={item.favorite}
      />
    ));
  }

  return <ul className={css.list}>{elements}</ul>;
};

NoticesCategoriesList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NoticesCategoriesList;
