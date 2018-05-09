import { actions } from '../actions';
import { unique } from '../inc/functions';


const data = (state = [], action) => {

    switch(action.type) {

        case actions.FETCH_SEARCH_RESULT:

            let search_res_artists_id = [];

            action.payload.artists.items.forEach( artist => {
                search_res_artists_id.push(artist.id);
            });

            return [{
                artists: search_res_artists_id, 
                tracks: action.payload.tracks.items
            }];
        
        case actions.FETCH_RECOMMENDATIONS:

            let recommandations_artists_id = [];

            action.payload.tracks.forEach( track => {
                track.artists.forEach( artist =>{
                    recommandations_artists_id.push(artist.id);
                });
            });
            
            return [{
                artists: unique(recommandations_artists_id), 
                tracks: action.payload.tracks
            }];
        
        default:
            return state;

    }

}

export default data;