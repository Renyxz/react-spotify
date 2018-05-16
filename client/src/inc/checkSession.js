// Check session
const date = new Date();
const now = date.getTime();

export const checkSession = () => {

    if( now > window.sessionStorage.expiryTime) {
    
        window.sessionStorage.clear();
    
    }

}