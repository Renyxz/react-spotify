import { hashParams } from './spotify-api';

// Check session
const date = new Date();
const now = date.getTime();

export const checkSession = () => {

    if( now > window.sessionStorage.expiryTime) {
    
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('expiryTime');
    
    }

}