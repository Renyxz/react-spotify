// This gets the user authentication URI
const getAuthURI = (client) => {

    let AUTH_URI = 'https://accounts.spotify.com/authorize';
    AUTH_URI += `?client_id=${ encodeURIComponent(client.client_id) }`;
    AUTH_URI += `&redirect_uri=${ encodeURIComponent(client.redirect_uri) }`;
    AUTH_URI += `&response_type=${ client.response_type }`;

    return AUTH_URI;

}



// Extracts hash values from url parameters
const hashParams = (hash) => {
    let params = {};
          
    let e, 
        r = /([^&;=]+)=?([^&;]*)/g,
        q = hash.substring(1);
    
        while ( e = r.exec(q)) {
        params[e[1]] = decodeURIComponent(e[2]);
        }
    
    return params;

}



// Search - Handles search query
const search = (query) => {

    let URI = `https://api.spotify.com/v1/search?q=artist:${ query.keyword }&type=${ query.searchType }`;

    const promise = fetch( URI, {
        headers: {
          'Authorization': 'Bearer ' + query.accessToken
        }
    })
    .then( (res) => {
        return res.json();
    });

    return promise;
}


// Export modules
export {

    getAuthURI,
    hashParams,
    search,

}