export const AUTH_TOKEN_KEY = "auth_token";

export function generateMockToken() {
  return `mock_${crypto.randomUUID()}`;
}

export function setAuthToken(token: string) {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  document.cookie = `${AUTH_TOKEN_KEY}=${token}; path=/`;
}

export function clearAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  document.cookie = `${AUTH_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}

export function getClientAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}
