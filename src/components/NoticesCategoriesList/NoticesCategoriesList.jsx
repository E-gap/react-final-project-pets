import css from './NoticesCategoriesList.module.css';
import propTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import NoticesCategoryItem from 'components/NoticesCategoryItem/NoticesCategoryItem';

const NoticesCategoriesList = ({ items, onClick }) => {
  // const { pathname } = useLocation();

  /* const pathnameArr = pathname.split('/');
  console.log(pathnameArr); */

  const elements = items.map(item => (
    <NoticesCategoryItem
      key={item._id}
      src={item.url}
      sex={item.sex}
      favorite={item.favorite}
      location={item.location}
      category={item.category}
      birthday={item.birthday}
      title={item.title}
    />
  ));
  return <ul className={css.list}>{elements}</ul>;
};

NoticesCategoriesList.defaultProps = {
  items: [],
};

NoticesCategoriesList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      _id: propTypes.string.isRequired,
    })
  ),
};

export default NoticesCategoriesList;
