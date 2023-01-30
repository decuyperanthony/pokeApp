import { FC } from 'react';
import useSWR from 'swr';
import fetcher from '../service/config';

type Results = {
  name: string;
  url: string;
};

type ResPokeAPI = {
  ok: true;
  data: {
    count: number;
    previous: string | null;
    next: string | null;
    results: ReadonlyArray<Results>;
  };
};

const PokemonsList: FC = () => {
  const { data: res, error, isLoading } = useSWR<ResPokeAPI>('/pokemons', fetcher);
  if (error) return <>error</>;
  if (isLoading) return <>isLoading...</>;

  return (
    <div>
      {res?.data.results.map(({ name }) => (
        <div key={'pokemon_' + name}>
          <p style={{ color: 'white' }}>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
