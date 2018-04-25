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

export default hashParams;