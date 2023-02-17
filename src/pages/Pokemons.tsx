import { Box, Stack } from '@mui/material';

import usePokemons from '../hooks/usePokemons';
import Pagination from '../components/Pagination';
import PoksList from '../components/PoksList';
import HeaderAppBar from '../components/HeaderAppBar';

export const PAGINATION_HEIGHT_WRAPPER = '50px';

const PokemonsPage = () => {
  const {
    error,
    isLoading,
    res,
    onLimitChange,
    totalPages,
    page,
    limit,
    onIndexPaginationClick,
  } = usePokemons();

  if (error) return <>erreur ...</>;

  return (
    <Stack position="relative">
      <HeaderAppBar />

      <Box>
        <PoksList isLoading={isLoading} pokemons={res?.data.results} />
      </Box>

      <Stack bgcolor="#F2F2F2" position="fixed" width="100%" bottom={0}>
        <Pagination
          onLimitChange={onLimitChange}
          onIndexPaginationClick={onIndexPaginationClick}
          totalPages={totalPages}
          page={page}
          limit={limit}
        />
      </Stack>
    </Stack>
  );
};

export default PokemonsPage;
