import { hashParams } from './functions';

// Set session
const hash = window.location.hash;
const params = hashParams(hash);
const accessToken = params.access_token;
const expiresIn = params.expires_in;

// If access token has not been saved in session storage
const date = new Date();

export const setSession = () => {

    if(accessToken) {
    
        window.sessionStorage.token = accessToken;
    
        if(!window.sessionStorage.expiryTime) {
        
        const tokenLife = expiresIn * 1000;
        const timestamp = date.getTime();
        const expiryTime = timestamp + tokenLife;
        window.sessionStorage.expiryTime = expiryTime;
        
        }
        
    }

}

