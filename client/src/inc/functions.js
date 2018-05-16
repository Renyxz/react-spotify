const unique = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) === pos;
    });
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


export {

    unique,
    hashParams,

}