const TOKEN_KEY = 'token';

export const setAuthBearerToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const getAuthBearerToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? `Bearer ${token}` : '';
}

export const deleteAuthBearerToken = () => {
  localStorage.removeItem(TOKEN_KEY);
} 