const BASE_URL = 'https://api.jsonbin.io/v3/b/642d6366c0e7653a059e3c14';

export const fetchProducts = fetch(BASE_URL)
  .then(data => data.json())
  .catch(error => error);