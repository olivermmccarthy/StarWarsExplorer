import type { ResourceType, ApiListResponse } from '../types/types.ts';

// --- API HELPER FUNCTIONS (swapi.js logic) ---

const API_BASE = 'https://swapi.dev/api';

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

export const getStarWarsId = (url: string): string => {
  const parts = url.split('/').filter(Boolean); // Filter out empty strings
  return parts[parts.length - 1];
};
