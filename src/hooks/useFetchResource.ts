import { useEffect, useState } from 'react';
import type { ResourceType, ApiListResponse } from '../types/types';
import { fetchResourceDetail, fetchResourceList } from '../api/swapi';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetchResource<T>(
  resource: ResourceType | undefined,
  idOrPage?: string | number
) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!resource || idOrPage === undefined) {
      // Set to not loading so UI doesn't hang
      setState((s) => ({ ...s, loading: false }));
      return;
    }

    // Reset state on new fetch
    setState({ data: null, loading: true, error: null });

    const fetchData = async () => {
      try {
        let result: T;
        if (typeof idOrPage === 'string') {
          result = (await fetchResourceDetail<T>(resource, idOrPage)) as T;
        } else {
          result = (await fetchResourceList<
            T extends ApiListResponse<infer U> ? U : T
          >(resource, idOrPage as number)) as T;
        }
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        if (err instanceof Error) {
          setState({ data: null, loading: false, error: err.message });
        } else {
          setState({
            data: null,
            loading: false,
            error: 'An unknown error occurred.',
          });
        }
      }
    };

    fetchData();
  }, [resource, idOrPage]);

  return state;
}
