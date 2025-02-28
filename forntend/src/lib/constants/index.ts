export const REQUEST_TIMEOUT = 30000;
export const USERS_PER_PAGE = 30;

export const ENDPOINTS = {
  SUPERHEROES: {
    GET_ALL: 'http://localhost:3000/heroes',
    CREATE: 'http://localhost:3000/heroes',
  }
} as const; 