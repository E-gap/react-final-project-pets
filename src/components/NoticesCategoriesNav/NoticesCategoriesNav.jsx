import css from './NoticesCategoriesNav.module.css';
const NoticesCategoriesNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <a className={css.link} href="/">
          sell
        </a>
      </li>
      <li>
        <a className={css.link} href="/">
          lost/found
        </a>
      </li>
      <li>
        <a className={css.link} href="/">
          in good hands
        </a>
      </li>
      <li>
        <a className={css.link} href="/">
          favorite ads
        </a>
      </li>
      <li>
        <a className={css.link} href="/">
          my ads
        </a>
      </li>
    </ul>
  );
};
export default NoticesCategoriesNav;
