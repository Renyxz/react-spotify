import React from 'react';
import { Redirect } from 'react-router-dom';
import { redirectToAuth } from '../inc/requestsToServer';



const LandingPage = ({ handleRedirect }) => {

    const auth = window.sessionStorage.token;

    if(auth && window.location.pathname !== '/browse') {

        return(

            <Redirect to="/browse" />

        );

    }



    return(

        <div className="landing-container">

            <div className="jumbotron text-center">
                
                <h1>Find your next hit music.</h1>

                <button onClick={ () => redirectToAuth() } >
                    GET STARTED
                </button>

            </div>

            <div className="video-wrapper">

                <iframe id="landing-video" src="https://www.youtube.com/embed/jzD_yyEcp0M?rel=0&amp;controls=0&amp;showinfo=0&amp;start=10&amp;autoplay=1&amp;loop=1&amp;playlist=jzD_yyEcp0M" title="Landing video" frameBorder="0" encrypted-media="true" allowFullScreen></iframe>

            </div>

        </div>

    );

}

export default LandingPage;