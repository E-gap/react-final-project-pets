import css from './NewsItem.module.css';

const NewsItem = ({ topic }) => {
  const { _id, imgUrl, text, title, date, url } = topic;
  return (
    <li className={css.item} key={_id}>
      <img className={css.img} src={imgUrl} alt={title} />
      <div className={css.wrapper}>
        <h2 className={css.header}>{title}</h2>
        <p className={css.text}>{text}</p>
        <div className={css.bottomWrapper}>
          <p className={css.date}>{date.slice(0, 10).replaceAll('-', '/')}</p>
          <a className={css.link} href={url} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
