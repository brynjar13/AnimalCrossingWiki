import { NextPage } from 'next';
import { SearchCreatures } from '../../components/SearchCreatures/SearchCreatures';

type props = {
  name: string;
  icon: string;
  id: number;
};

const Home: NextPage<{ villagers: props[] }> = ({ villagers }) => {
  return (
    <SearchCreatures
      creaturesArray={villagers}
      creature='villagers'
    ></SearchCreatures>
  );
};

export async function getStaticProps() {
  let villagers = [];
  const data = await fetch(`http://acnhapi.com/v1/villagers`);
  const json = await data.json();

  for (const fish in json) {
    villagers.push({
      name: json[fish].name['name-USen'],
      icon: json[fish].icon_uri,
      id: json[fish].id,
    });
  }

  return {
    props: {
      villagers,
    },
  };
}

export default Home;
