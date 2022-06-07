import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import s from './Fishes.module.scss';

type fishes = {
  fish: string;
  icon: string;
  id: number;
};

type props = {
  fishes: fishes[];
};

export function Fishes({ fishes }: props) {
  const [fishArray, setFishArray] = useState(fishes);

  const onchange = (e: any) => {
    let visibleFish: fishes[] = [];
    fishes.forEach((item) => {
      if (item.fish.toLowerCase().includes(e.target.value.toLowerCase())) {
        visibleFish.push(item);
      }
      setFishArray(visibleFish);
    });
  };
  return (
    <div className={s.container}>
      <input
        type='search'
        placeholder='Search for a fish'
        className={s.searchBar}
        onChange={onchange}
      />
      <ul className={s.list}>
        {fishArray.map((item) => (
          <p key={item.fish} className={s.list__item}>
            <Link href={`/fish/${item.id}`}>{item.fish}</Link>
            <Image
              src={item.icon}
              alt={item.fish}
              height={100}
              width={100}
            ></Image>
          </p>
        ))}
      </ul>
    </div>
  );
}
