import Link from 'next/link';
import s from './Layout.module.scss';

type props = {
  title: string;
  children: React.ReactNode;
  footer: JSX.Element;
};

export function Layout({ title, children, footer }: props) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1 className={s.layout__header__text}>{title}</h1>
        <nav className={s.nav}>
          <Link href={'/'}>Home</Link>
          <Link href={'/fish'}>Fish</Link>
          <Link href={'/villagers'}>Villagers</Link>
          <Link href={'/bugs'}>Bugs</Link>
          <Link href={'/sea-creatures'}>Sea creatures</Link>
        </nav>
      </header>
      <main className={s.layout__main}>{children}</main>
      <footer className={s.layout__footer}>{footer}</footer>
    </div>
  );
}
