import { Pokemons } from 'hooks/usePokemons';
import { FC } from 'react';

type Props = {
  pokemons?: ReadonlyArray<Pokemons>;
};

const PokemonsList: FC<Props> = ({ pokemons }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid black',
      }}>
      {pokemons?.map(({ name }) => (
        <div style={{ marginRight: 8 }} key={'pokemon_' + name}>
          <p style={{ color: 'white' }}>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
