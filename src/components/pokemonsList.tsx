import { CircularProgress, Grid, Stack } from '@mui/material';
import { Pokemon } from 'Models/pokemon';
import { FC } from 'react';
import PokemonCardItem from './PokemonCardItem';

type Props = {
  pokemons?: ReadonlyArray<Pokemon>;
  isLoading: boolean;
};

const PokemonsList: FC<Props> = ({ pokemons, isLoading }) => {
  return (
    <Stack>
      {isLoading && (
        <Stack
          sx={{ backdropFilter: 'blur(3px)' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          position="absolute"
          width="100%"
          zIndex={100}>
          <CircularProgress />
        </Stack>
      )}
      <Grid container spacing={4} p={2}>
        {pokemons?.map((pokemon) => (
          <Grid key={'pokemon_' + pokemon.name} item xs={12} sm={6} md={4}>
            <PokemonCardItem pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default PokemonsList;
