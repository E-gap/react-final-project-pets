import css from './OurFriendsPage.module.css';
import { friends } from "./friends"

const OurFriendsPage = () => {
  const elements = friends.map(item => (
    <li className={css.item}>
      <p className={css.itemTitle}>{item.name}</p>
      <div className={css.itemWrapper}>
        <img className={css.itemLogo} src={item.logo} alt="logo" />
        <ul className={css.itemList}>
          <li>
            <p className={css.textTitle}>Time:</p>
            <p className={css.text}>{item.time}</p>
          </li>
          <li>
            <p className={css.textTitle}>Address:</p>
            <a className={css.text} href="https:{item.mapUrl}">
              {item.address}
            </a>
          </li>
          <li>
            <p className={css.textTitle}>Email:</p>
            <a className={css.text} href="mailto:{item.email}">
              {item.email}
            </a>
          </li>
          <li>
            <p className={css.textTitle}>Phone:</p>
            <a className={css.text} href="tel:{item.phone}">
              {item.phone}
            </a>
          </li>
        </ul>
      </div>
    </li>
  ));

  return (
    <div className={css.container}>
      <h1 className={css.title}>Our friends</h1>
      <ul className={css.list}>{elements}</ul>
    </div>
  );
};

export default OurFriendsPage;
