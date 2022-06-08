import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import { Creature } from '../../components/Creature/Creature';

type props = {
  id: number;
  ['file-name']: string;
  name: {
    ['name-USen']: string;
    ['name-EUen']: string;
    ['name-EUde']: string;
    ['name-EUes']: string;
    ['name-USes']: string;
    ['name-EUfr']: string;
    ['name-USfr']: string;
    ['name-EUit']: string;
    ['name-EUnl']: string;
    ['name-EUru']: string;
    ['name-JPja']: string;
    ['name-KRko']: string;
    ['name-CNzh']: string;
    ['name-TWzh']: string;
  };
  shadow: string;
  availability: {
    isAllDay: boolean;
    ['month-southern']: string;
    ['month-northern']: string;
    time: string;
    location: string;
    rarity: string;
    isAllYear: boolean;
    ['month-array-northern']: number[];
    ['month-array-southern']: number[];
    ['time-array']: number[];
  };
  price: number;
  ['price-flick']: number;
  ['catch-phrase']: string;
  ['museum-phrase']: string;
  image_uri: string;
  icon_uri: string;
};

const Home: NextPage<{ json: props }> = ({ json }) => {
  return (
    <Creature
      name={json.name['name-USen']}
      shadow={json.shadow}
      availability={json.availability}
      price={json.price}
      priceCj={json['price-flick']}
      image={json.image_uri}
      catchPhrase={json['catch-phrase']}
      museumPhrase={json['museum-phrase']}
      rarity={json.availability.rarity}
      location={json.availability.location}
      time={json.availability.time}
      fish={false}
    />
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
  const data = await fetch(`http://acnhapi.com/v1/bugs/${id}`);
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
