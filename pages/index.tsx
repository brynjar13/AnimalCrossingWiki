import type { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IndexCard } from '../components/IndexCard/IndexCard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='card__div'>
      <IndexCard
        link={'fish'}
        text={'Fish'}
        svgName='fish-hand-drawn-animal-svgrepo-com.svg'
      ></IndexCard>
      <IndexCard
        link={'villagers'}
        text={'Villagers'}
        svgName='people-svgrepo-com.svg'
      ></IndexCard>
      <IndexCard
        link={'bugs'}
        text={'Bugs'}
        svgName='bug-svgrepo-com.svg'
      ></IndexCard>
      <IndexCard
        link={'sea-creatues'}
        text={'Sea creatures'}
        svgName='crab-svgrepo-com.svg'
      ></IndexCard>
    </div>
  );
};

export default Home;
