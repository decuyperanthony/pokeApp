import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Pokemon } from '../Models/pokemon';
import { Box, Stack } from '@mui/material';

const PokemonCardItem: FC<{ pokemon: Pokemon }> = ({
  pokemon: {
    name,
    weight,
    height,
    sprites: { front_default },
    types,
  },
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {front_default ? (
        <CardMedia
          sx={{ height: 200, width: 200, margin: 'auto' }}
          image={front_default}
          title="pokemon images"
        />
      ) : (
        <Box
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center">
          No image ...
        </Box>
      )}

      <CardContent>
        <Typography height="65px" gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          height : {height}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          weight : {weight}
        </Typography>
        <Stack spacing={2} direction="row">
          {types.map(({ type }) => (
            <Typography
              variant="body1"
              key={`pokemon_${name}_type_${type.name}`}>
              {type.name}
            </Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonCardItem;
