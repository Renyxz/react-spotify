import { actions } from '../actions';


const data = (state = [], action) => {

    switch(action.type) {

        case actions.FETCH_DATA:
            return [ action.payload ];
        
        default:
            return state;

    }

}

export default data;