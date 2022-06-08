import Image from 'next/image';
import { Card } from '../Card/Card';
import s from './Creature.module.scss';

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
  fish: boolean;
};

export function Creature({
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
  fish,
}: props) {
  return (
    <div>
      <div className={s.image__container}>
        <h1 className={s.image__container__text}>{name}</h1>
        <Image
          alt='photo of creature'
          src={image}
          layout='responsive'
          objectFit='contain'
          width='100%'
          height='50%'
        ></Image>
      </div>
      <h1 className={s.info__header}>Info</h1>
      <div className={s.info__boxes}>
        {fish && (
          <Card
            title={'Prices'}
            listItems={[`Price: ${price}`, `Price CJ: ${priceCj}`]}
          ></Card>
        )}
        {!fish && (
          <Card
            title={'Prices'}
            listItems={[`Price: ${price}`, `Price Flick: ${priceCj}`]}
          ></Card>
        )}
        {fish && <Card title={'Shadow'} listItems={[shadow]}></Card>}
        {!fish && (
          <Card title={'Shadow'} listItems={['Bugs don`t have shadows']}></Card>
        )}
        <h1 className={s.info__boxes__header}>Phrases</h1>
        <h1 className={s.filler}>filler</h1>
        <Card title={'Catch phrase'} listItems={[catchPhrase]}></Card>
        <Card title={'Museum phrase'} listItems={[museumPhrase]}></Card>
        <h1 className={s.info__boxes__headerFour}>Availability</h1>
        <Card
          title={'Location and Rarity'}
          listItems={[`${rarity} in ${location}`]}
        ></Card>
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
            <ul className={s.info__box__list}>
              <li>Can be found from {time}</li>
            </ul>
          )}
          {availability.isAllDay && (
            <ul className={s.info__box__list}>
              <li>Can be found all day!</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
