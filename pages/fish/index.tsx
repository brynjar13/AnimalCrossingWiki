import { NextPage } from 'next';
import { Fishes } from '../../components/Fishes/Fishes';

type props = {
  fish: string;
  icon: string;
  id: number;
};

const Home: NextPage<{ fishes: props[] }> = ({ fishes }) => {
  return <Fishes fishes={fishes}></Fishes>;
};

export async function getStaticProps() {
  let fishes = [];
  const data = await fetch(`http://acnhapi.com/v1/fish`);
  const json = await data.json();

  for (const fish in json) {
    fishes.push({
      fish: json[fish].name['name-USen'],
      icon: json[fish].icon_uri,
      id: json[fish].id,
    });
  }

  return {
    props: {
      fishes,
    },
  };
}

export default Home;
