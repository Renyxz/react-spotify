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



// Query handler
const queryHandler = (URI, query) => {

    const promise = fetch( URI, {
        method: query.method,
        headers: {
          'Authorization': 'Bearer ' + query.accessToken
        }
    }).then( (res) => {

        return res.json();

    }).catch( (error) => {

        console.log(error);

    });

    return promise;
    
}



// Search - Handles search query
const search = (query) => {

    let URI = `https://api.spotify.com/v1/search?q=${ query.keyword }&type=${ query.searchType }&limit=5`;

    const result = queryHandler(URI, query);

    return result;
}



/**
 * Browse
 */

// Get a List of Categories
const getCategoriesList = (query) => {

    let URI = `https://api.spotify.com/v1/browse/categories`;

    const result = queryHandler(URI, query);

    return result;
}


// Get a category's playlist
const getCategoryPlaylists = (query, category_id) => {
    
    let URI = `https://api.spotify.com/v1/browse/categories/${ category_id }/playlists?offset=0&limit=1`;

    const result = queryHandler(URI, query);

    return result;
}


// Get track recommendations 
const getRecommendations = (query, seed) => {

    const seed_artists = `seed_artists=${ seed.artists }`;
    const seed_tracks = `&seed_tracks=${ seed.tracks }`;
    const min_popularity = `&min_popularity=${ 80 }`;

    let URI = `https://api.spotify.com/v1/recommendations?${ seed_artists }${ seed_tracks }${ min_popularity }`;
    const result = queryHandler(URI, query);

    return result;
}



/**
 * Playlist
 */

// Get the list of current user's playlists
const getMyPlaylists = (query) => {

    const URI = 'https://api.spotify.com/v1/me/playlists';
    const result = queryHandler(URI, query);

    return result;
}



// Get a Playlist's Tracks
const getPlaylistTracks = (query) => {

    const URI = `https://api.spotify.com/v1/users/${ query.user_id }/playlists/${ query.playlist_id }/tracks`;
    const result = queryHandler(URI, query);

    return result;
};



// Add tracks to a playlist
const addTracksToPlaylist = (query) => {

    const track_uris = `?uris=${ encodeURIComponent('spotify:track:' + query.track_id) }`;
    const scopes = `&scope=${ encodeURIComponent('playlist-modify playlist-modify-public') }`;
    
    const URI = `https://api.spotify.com/v1/users/${ query.user_id }/playlists/${ query.playlist_id }/tracks${ track_uris }${ scopes }`;
    const result = queryHandler(URI, query);
    
    return result;
};



// Export modules
export {

    getAuthURI,
    hashParams,
    search,
    getCategoriesList,
    getCategoryPlaylists,
    getRecommendations,
    getMyPlaylists,
    getPlaylistTracks,
    addTracksToPlaylist,

}