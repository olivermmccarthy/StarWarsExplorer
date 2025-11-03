// --- TYPE DEFINITIONS ---
// Define interfaces for the main SWAPI resources
export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  eye_color: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  url: string;
}

export interface Planet {
  name: string;
  population: string;
  terrain: string;
  diameter: string;
  climate: string;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  starship_class: string;
  url: string;
}

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  vehicle_class: string;
  url: string;
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
  url: string;
}

// Generic type for the paged API list response
export interface ApiListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
