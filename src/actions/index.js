// Action creator variables
export const actions = {

    FETCH_SEARCH_RESULT: 'FETCH_SEARCH_RESULT',
    FETCH_RECOMMENDATIONS: 'FETCH_RECOMMENDATIONS',

};



// Action creators

export const fetchSearchResult = (data) => {
    console.log('fetchSearchResult: ', data);
    return {
        type: actions.FETCH_SEARCH_RESULT,
        payload: data
    };

}

export const fetchRecommendations = (data) => {
    console.log('fetchRecommendations: ', data);
    return {
        type: actions.FETCH_RECOMMENDATIONS,
        payload: data
    };

}