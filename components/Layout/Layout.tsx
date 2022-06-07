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
      </header>
      <main className={s.layout__main}>{children}</main>
      <footer className={s.layout__footer}>{footer}</footer>
    </div>
  );
}
