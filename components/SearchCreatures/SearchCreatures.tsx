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
  creature: creature[];
};

export function SearchCreatures({ creature }: creatureType) {
  const [creatureArray, setCreatureArray] = useState(creature);

  const onchange = (e: any) => {
    let visibleCreature: creature[] = [];
    creature.forEach((item) => {
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
        placeholder='Search for bugs'
        className={s.searchBar}
        onChange={onchange}
      />
      <ul className={s.list}>
        {creatureArray.length > 0 &&
          creatureArray.map((item) => (
            <p key={item.name} className={s.list__item}>
              <Link href={`/bugs/${item.id}`}>{item.name}</Link>
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
