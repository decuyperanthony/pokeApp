import usePokemons from '../hooks/usePokemons';
import Pagination from '../components/Pagination';
import PokemonsList from '../components/PokemonsList';
import { Box, Stack } from '@mui/material';

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
    <Stack className="App">
      <Box
        position="relative"
        overflow="auto"
        height={`calc(100vh - ${PAGINATION_HEIGHT_WRAPPER})`}>
        <PokemonsList isLoading={isLoading} pokemons={res?.data.results} />
      </Box>

      <Stack
        alignItems="center"
        justifyContent="center"
        bgcolor="#F2F2F2"
        height={PAGINATION_HEIGHT_WRAPPER}>
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
