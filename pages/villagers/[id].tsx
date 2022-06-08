import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import { Villager } from '../../components/Villager/Villager';

type props = {
  id: 1;
  'file-name': string;
  name: {
    'name-USen': string;
    'name-EUen': string;
    'name-EUde': string;
    'name-EUes': string;
    'name-USes': string;
    'name-EUfr': string;
    'name-USfr': string;
    'name-EUit': string;
    'name-EUnl': string;
    'name-CNzh': string;
    'name-TWzh': string;
    'name-JPja': string;
    'name-KRko': string;
    'name-EUru': string;
  };
  personality: string;
  'birthday-string': string;
  birthday: string;
  species: string;
  gender: string;
  subtype: string;
  hobby: string;
  'catch-phrase': string;
  icon_uri: string;
  image_uri: string;
  'bubble-color': string;
  'text-color': string;
  saying: string;
  'catch-translations': {
    'catch-USen': string;
    'catch-EUen': string;
    'catch-EUde': string;
    'catch-EUes': string;
    'catch-USes': string;
    'catch-EUfr': string;
    'catch-USfr': string;
    'catch-EUit': string;
    'catch-EUnl': string;
    'catch-CNzh': string;
    'catch-TWzh': string;
    'catch-JPja': string;
    'catch-KRko': string;
    'catch-EUru': string;
  };
};

const Home: NextPage<{ json: props }> = ({ json }) => {
  return (
    <Villager name={json.name['name-USen']} image={json.image_uri}></Villager>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id ?? null;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const data = await fetch(`http://acnhapi.com/v1/villagers/${id}`);
  if (!data.ok) {
    return {
      notFound: true,
    };
  }
  const json = await data.json();

  return {
    props: {
      json,
    },
  };
}

export default Home;
