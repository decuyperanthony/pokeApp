import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import fetcher from '../service/config';

export type Pokemons = {
  name: string;
  url: string;
};

type ResPokeAPI = {
  ok: true;
  data: {
    count: number;
    previous: string | null;
    next: string | null;
    results: ReadonlyArray<Pokemons>;
  };
};

const FETCH_POKEMON_URL = '/pokemons';

const usePokemons = () => {
  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);
  const [page, setPages] = useState(1);

  const queryParams = useMemo(
    () => `?limit=${limit}&offset=${offset}`,
    [limit, offset]
  );

  const {
    data: res,
    error,
    isLoading,
  } = useSWR<ResPokeAPI>(FETCH_POKEMON_URL + queryParams, fetcher);

  const totalPages = useMemo(
    () => (res ? Math.ceil(res.data.count / limit) : null),
    [limit, res]
  );

  const onIndexPaginationClick = useCallback((n: number) => {
    setPages(n);
    setOffset(n === 1 ? 0 : (n - 1) * limit);
  }, []);

  const onChangeLimit = useCallback((val: string) => {
    setLimit(parseFloat(val));
  }, []);

  return useMemo(() => {
    return {
      totalPages,
      res,
      error,
      isLoading,
      page,
      onIndexPaginationClick,
      onChangeLimit,
    };
  }, [
    totalPages,
    res,
    error,
    isLoading,
    page,
    onIndexPaginationClick,
    onChangeLimit,
  ]);
};

export default usePokemons;
