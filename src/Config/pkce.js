function generateRandomString(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
  }
  
  function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return crypto.subtle.digest('SHA-256', data);
  }
  
  function base64urlencode(a) {
    return btoa(String.fromCharCode(...new Uint8Array(a)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  
  export async function generateCodeChallenge(codeVerifier) {
    const hashed = await sha256(codeVerifier);
    return base64urlencode(hashed);
  }
  
  export function generateCodeVerifier() {
    return generateRandomString(128);
  }
  