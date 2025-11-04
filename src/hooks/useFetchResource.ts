import { useEffect, useState } from 'react';
import type { ResourceType, ApiListResponse } from '../types/types';
import { fetchResourceDetail, fetchResourceList } from '../api/swapi';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetchResource<T>(
  resource: ResourceType,
  idOrPage?: string | number
) {
  const [state, setState] = useState<FetchState<T | ApiListResponse<T>>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Don't fetch if parameters aren't set
    if (!resource || idOrPage === undefined) {
      // Set to not loading so UI doesn't hang
      setState((s) => ({ ...s, loading: false }));
      return;
    }

    // Reset state on new fetch
    setState({ data: null, loading: true, error: null });

    const fetchData = async () => {
      try {
        let result: T | ApiListResponse<T>;
        if (typeof idOrPage === 'string') {
          // Fetching detail by ID
          result = await fetchResourceDetail<T>(resource, idOrPage);
        } else {
          // Fetching list by page number
          result = await fetchResourceList<T>(resource, idOrPage as number);
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
  }, [resource, idOrPage]); // Re-run effect when resource or id/page changes

  return state;
}
