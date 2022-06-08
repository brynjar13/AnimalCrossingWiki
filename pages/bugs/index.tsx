import { NextPage } from 'next';
import { SearchCreatures } from '../../components/SearchCreatures/SearchCreatures';

type props = {
  name: string;
  icon: string;
  id: number;
};

const Home: NextPage<{ bugs: props[] }> = ({ bugs }) => {
  return <SearchCreatures creature={bugs}></SearchCreatures>;
};

export async function getStaticProps() {
  let bugs = [];
  const data = await fetch(`http://acnhapi.com/v1/bugs`);
  const json = await data.json();

  for (const bug in json) {
    bugs.push({
      name: json[bug].name['name-USen'],
      icon: json[bug].icon_uri,
      id: json[bug].id,
    });
  }

  return {
    props: {
      bugs,
    },
  };
}

export default Home;
