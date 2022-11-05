import Link from 'next/link';
import { useContext } from 'react';
import s from './Footer.module.scss';

export function Footer() {
  return (
    <div className={s.links}>
      <Link href={'/'}>Back home</Link>
    </div>
  );
}
