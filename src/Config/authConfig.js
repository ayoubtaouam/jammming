export const CLIENT_ID = 'cd6fc140203b4dd588c66bda9f6ec161';
export const REDIRECT_URI = 'http://localhost:3000/callback';
export const SCOPES = [
  'user-read-private',
  'playlist-modify-public',
  'playlist-modify-private'
].join(' ');
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
