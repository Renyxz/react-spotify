// This will redirect to the Spotify authentication page
const redirectToAuth = () => {

    fetch('/auth', {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then( res => {
        return res.json();
    })
    .then( res => {
        console.log(res);
        window.location = res.auth_uri;
    })
    .catch( error => {
        console.log(error);
    });
    
};


export {

    redirectToAuth,

}