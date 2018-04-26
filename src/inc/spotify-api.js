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

    search,

}