import React from 'react';
import { getRecommendations } from '../inc/spotify-api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecommendations } from '../actions';


const RecommendTracks = ({ seed, fetchRecommendations }) => {

    const handleRecommend = (seed) => {
        
        const query = {
            accessToken: window.sessionStorage.token
        };

        const promise = getRecommendations(query, seed);

        promise.then( res => {
            // TODO: Find out why error is being sent to action creator instead of being catched here.
            fetchRecommendations(res);
            console.log('Recommendation: ', res);
        });

        promise.catch( error => {
            console.log('Error: ', error);
        });

    }

    return(

        <button className="btn btn-dark" onClick={ () => handleRecommend(seed) } >
            <i className="fas fa-angle-double-right"></i>
        </button>

    );

}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchRecommendations }, dispatch);
};

export default connect(null, mapDispatchToProps)(RecommendTracks);