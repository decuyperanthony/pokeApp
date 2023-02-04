import usePokemons from '../hooks/usePokemons';
import Pagination from '../components/Pagination';
import PokemonsList from '../components/PokemonsList';

const PokemonsPage = () => {
  const {
    error,
    isLoading,
    res,
    onChangeLimit,
    totalPages,
    page,
    onIndexPaginationClick,
  } = usePokemons();

  if (error) return <>erreur ...</>;

  return (
    <div className="App">
      {isLoading ? (
        <>loader ...</>
      ) : (
        <PokemonsList pokemons={res?.data.results} />
      )}

      <Pagination
        onChangeLimit={onChangeLimit}
        onIndexPaginationClick={onIndexPaginationClick}
        totalPages={totalPages}
        page={page}
      />
    </div>
  );
};

export default PokemonsPage;
