import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import s from './SearchCreatures.module.scss';

type creature = {
  name: string;
  icon: string;
  id: number;
};

type creatureType = {
  creaturesArray: creature[];
  creature: string;
};

export function SearchCreatures({ creaturesArray, creature }: creatureType) {
  const [creatureArray, setCreatureArray] = useState(creaturesArray);

  const onchange = (e: any) => {
    let visibleCreature: creature[] = [];
    creaturesArray.forEach((item) => {
      if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        visibleCreature.push(item);
      }
      setCreatureArray(visibleCreature);
    });
  };
  return (
    <div className={s.container}>
      <input
        type='search'
        placeholder={`Search for ${creature}`}
        className={s.searchBar}
        onChange={onchange}
      />
      <ul className={s.list}>
        {creatureArray.length > 0 &&
          creatureArray.map((item) => (
            <p key={item.name} className={s.list__item}>
              <Link href={`/${creature}/${item.id}`}>{item.name}</Link>
              <Image
                src={item.icon}
                alt={item.name}
                height={100}
                width={100}
              ></Image>
            </p>
          ))}
        {creatureArray.length == 0 && (
          <h2 className={s.header}>No fish with those letters</h2>
        )}
      </ul>
    </div>
  );
}
