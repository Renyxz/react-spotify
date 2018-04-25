// Implicit Grant Auth variables
const client_id = 'df2860e01b3444c497c9d5580e5bc6c6';
const response_type = 'token';
const redirect_uri = 'http://localhost:3000';

// Auth URI
let AUTH_URI = 'https://accounts.spotify.com/authorize';
AUTH_URI += `?client_id=${ encodeURIComponent(client_id) }`;
AUTH_URI += `&redirect_uri=${ encodeURIComponent(redirect_uri) }`
AUTH_URI += `&response_type=${ response_type }`

export default AUTH_URI;
