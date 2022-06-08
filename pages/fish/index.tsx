import { NextPage } from 'next';
import { SearchCreatures } from '../../components/SearchCreatures/SearchCreatures';

type props = {
  name: string;
  icon: string;
  id: number;
};

const Home: NextPage<{ fishes: props[] }> = ({ fishes }) => {
  return (
    <SearchCreatures creaturesArray={fishes} creature='fish'></SearchCreatures>
  );
};

export async function getStaticProps() {
  let fishes = [];
  const data = await fetch(`http://acnhapi.com/v1/fish`);
  const json = await data.json();

  for (const fish in json) {
    fishes.push({
      name: json[fish].name['name-USen'],
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
