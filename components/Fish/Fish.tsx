import { time } from 'console';
import Image from 'next/image';
import s from './Fish.module.scss';

type availability = {
  isAllDay: boolean;
  isAllYear: boolean;
  ['month-array-northern']: number[];
  ['month-array-southern']: number[];
};

type props = {
  name: string;
  shadow: string;
  availability: availability;
  price: number;
  priceCj: number;
  image: string;
  catchPhrase: string;
  museumPhrase: string;
  rarity: string;
  location: string;
  time: string;
};

export function Fish({
  name,
  shadow,
  availability,
  price,
  priceCj,
  image,
  catchPhrase,
  museumPhrase,
  rarity,
  location,
  time,
}: props) {
  return (
    <div className={s.fish}>
      <div className={s.image__container}>
        <h1 className={s.image__container__text}>{name}</h1>
        <Image
          alt='fish'
          src={image}
          layout='responsive'
          objectFit='contain'
          width='100%'
          height='50%'
        ></Image>
      </div>
      <h1 className={s.info__header}>Info</h1>
      <div className={s.info__boxes}>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Prices</h2>
          <ul className={s.info__box__list}>
            <li>Price: {price}</li>
            <li>Price CJ: {priceCj}</li>
            <li>shadow: {shadow}</li>
          </ul>
        </div>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Availability</h2>
          <ul className={s.info__box__list}>
            {availability['month-array-northern'].map((month) => (
              <li key={month}>{month}</li>
            ))}
          </ul>
        </div>
        <h1 className={s.info__boxes__header}>Phrases</h1>
        <h1 className={s.filler}>filler</h1>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Catch phrase</h2>
          <p className={s.info__box__text}>{catchPhrase}</p>
        </div>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Museum phrase</h2>
          <p className={s.info__box__text}>{museumPhrase}</p>
        </div>
        <h1 className={s.info__boxes__headerFour}>Availability</h1>
        <div className={s.info__box}>
          <h2 className={s.info__box__listHeader}>Rarity</h2>
          <ul>
            <li>{rarity}</li>
          </ul>
          <h2 className={s.info__box__listHeader}>Location</h2>
          <ul>
            <li>{location}</li>
          </ul>
        </div>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Months northern</h2>
          <ul className={s.info__box__list}>
            {!availability.isAllYear &&
              availability['month-array-northern'].map((month) => (
                <li key={month}>{month}</li>
              ))}
            {availability.isAllYear && <li>Can be found all year!</li>}
          </ul>
        </div>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Months southern</h2>
          <ul className={s.info__box__list}>
            {!availability.isAllYear &&
              availability['month-array-southern'].map((month) => (
                <li key={month}>{month}</li>
              ))}
            {availability.isAllYear && <li>Can be found all year!</li>}
          </ul>
        </div>
        <div className={s.info__box}>
          <h2 className={s.info__box__header}>Time found</h2>
          {!availability.isAllDay && (
            <p className={s.info__box__text}>Can be found from {time}</p>
          )}
          {availability.isAllDay && (
            <p className={s.info__box__text}>Can be found all day</p>
          )}
        </div>
      </div>
    </div>
  );
}
