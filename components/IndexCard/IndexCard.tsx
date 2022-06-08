import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './IndexCard.module.scss';

type props = {
  link: string;
  text: string;
  svgName: string;
};

export function IndexCard({ link, text, svgName }: props) {
  const router = useRouter();
  return (
    <div className={s.btn_container}>
      <button className={s.button} onClick={(e) => router.push(`/${link}`)}>
        <span className={s.text}>{text}</span>
        <div className={s.icon_container}>
          <div className={`${s.icon} ${s.icon__left}`}>
            <div className={s.svg}>
              <Image
                src={`/${svgName}`}
                width='50'
                height='50'
                alt='fish icon'
              ></Image>
            </div>
          </div>
          <div className={`${s.icon} ${s.icon__right}`}>
            <object
              data='../../public/fish-hand-drawn-animal-svgrepo-com.svg'
              width='50'
              height='50'
            ></object>
          </div>
        </div>
      </button>
    </div>
  );
}
