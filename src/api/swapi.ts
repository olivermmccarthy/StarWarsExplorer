import type { ApiListResponse } from '../types/types.ts';

// String literal type for resource keys
type ResourceType = 'people' | 'planets' | 'starships' | 'vehicles' | 'species';

// --- API HELPER FUNCTIONS (swapi.js logic) ---

const API_BASE = 'https://swapi.dev/api';
/**
 * Fetches a paginated list of resources.
 * @param resource - The type of resource to fetch (e.g., 'people')
 * @param page - The page number to retrieve
 */
export async function fetchResourceList<T>(
  resource: ResourceType,
  page: number = 1
): Promise<ApiListResponse<T>> {
  const response = await fetch(`${API_BASE}/${resource}/?page=${page}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok. Status: ${response.status}`);
  }
  return response.json();
}

/**
 * Fetches details for a single resource by its ID.
 * @param resource - The type of resource to fetch (e.g., 'people')
 * @param id - The ID of the resource item
 */
export async function fetchResourceDetail<T>(
  resource: ResourceType,
  id: string
): Promise<T> {
  const response = await fetch(`${API_BASE}/${resource}/${id}/`);
  if (!response.ok) {
    throw new Error(`Network response was not ok. Status: ${response.status}`);
  }
  return response.json();
}

/**
 * Helper to extract the ID from a SWAPI URL (e.g., "https://swapi.dev/api/people/1/")
 */
const getStarWarsId = (url: string): string => {
  const parts = url.split('/').filter(Boolean); // Filter out empty strings
  return parts[parts.length - 1];
};
