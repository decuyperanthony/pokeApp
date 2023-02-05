import { Pokemon } from 'Models/pokemon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { POKEMON_URL } from '../service/endPoint';
import useSWR from 'swr';
import fetcher from '../service/config';

type ResPokeAPI = {
  ok: true;
  data: {
    count: number;
    previous: string | null;
    next: string | null;
    results: ReadonlyArray<Pokemon>;
  };
};

const usePokemons = () => {
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [pokemonsCount, setPokemonsCount] = useState<number>();

  const queryParams = useMemo(
    () => `?limit=${limit}&offset=${offset}`,
    [limit, offset]
  );

  const {
    data: res,
    error,
    isLoading,
  } = useSWR<ResPokeAPI>(POKEMON_URL + queryParams, fetcher);

  const totalPages = useMemo(
    () => (pokemonsCount ? Math.ceil(pokemonsCount / limit) : 50),
    [limit, pokemonsCount]
  );

  const onIndexPaginationClick = useCallback(
    (n: number) => {
      setPage(n);
      setOffset(n === 1 ? 0 : (n - 1) * limit);
    },
    [limit]
  );

  const onLimitChange = useCallback((val: string) => {
    setPage(1);
    setOffset(0);
    setLimit(parseFloat(val));
  }, []);

  useEffect(() => {
    if (res?.data.count && !pokemonsCount) setPokemonsCount(res.data.count);
  }, [res]);

  return useMemo(() => {
    return {
      totalPages,
      res,
      error,
      isLoading,
      page,
      onIndexPaginationClick,
      onLimitChange,
      limit,
    };
  }, [
    totalPages,
    res,
    error,
    isLoading,
    page,
    onIndexPaginationClick,
    onLimitChange,
    limit,
  ]);
};

export default usePokemons;
