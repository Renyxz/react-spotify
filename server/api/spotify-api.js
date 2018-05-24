// This gets the user authentication URI
const getAuthURI = (client) => {

    const scopes = 'playlist-modify playlist-modify-public playlist-modify-private';

    let AUTH_URI = 'https://accounts.spotify.com/authorize';
    AUTH_URI += `?client_id=${ encodeURIComponent(client.client_id) }`;
    AUTH_URI += `&scope=${ encodeURIComponent(scopes) }`;
    AUTH_URI += `&redirect_uri=${ encodeURIComponent(client.redirect_uri) }`;
    AUTH_URI += `&response_type=${ client.response_type }`;

    return AUTH_URI;

}


// Export modules
module.exports = {

    getAuthURI,

};