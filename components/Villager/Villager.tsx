import Image from 'next/image';
import s from './Villager.module.scss';

export function Villager({ name, image }: any) {
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
    </div>
  );
}
