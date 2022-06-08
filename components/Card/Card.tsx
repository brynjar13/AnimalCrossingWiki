import s from './Card.module.scss';

type props = {
  title: string;
  listItems: string[];
};

export function Card({ title, listItems }: props) {
  return (
    <div className={s.info__box}>
      <h2 className={s.info__box__header}>{title}</h2>
      <ul className={s.info__box__list}>
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
