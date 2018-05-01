// Action creator variables
export const actions = {

    FETCH_DATA: 'FETCH_DATA',

};



// Action creators

export const fetchData = (data) => {
    console.log(data);
    return {
        type: actions.FETCH_DATA,
        payload: data
    };

}