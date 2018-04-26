import React, { Component } from 'react';
import { search } from '../inc/spotify-api';


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {

            keyword: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
    }


    // Handles input change 
    handleChange(event) {

        const keyword = event.target.value;

        this.setState({ keyword });

    }


    // Handles search
    handleQuery(event) {
        
        event.preventDefault();
    
        const accessToken = window.sessionStorage.token;
    
        if(!accessToken) { return; }
        
        const keyword = this.state.keyword;

        // Search query
        const query = {
    
          accessToken, // Required
          keyword: encodeURIComponent(keyword), // Required
          searchType: ['album', 'artist', 'playlist', 'track'] // Required
    
        };
    
        // Search - Make request to Spotify API:
        const promise = search(query);
        
        // If request is successful:
        promise.then( (data) => {
          console.log(data);
        });
    
        // If request failed:
        promise.catch( (error) => {
          console.log(error);
        });
    
        console.log(accessToken, window.sessionStorage);
    
    }


    
    render() {
        console.log(this.state.keyword);

        return(

            <div>
                
                <form className="form-group" action="" onSubmit={ this.handleQuery } >

                    <input className="form-control" value={ this.state.keyword } type="text" placeholder="Search for track, artist, album, or playlist..." onChange={ this.handleChange } />

                </form>

            </div>

        );

    }

}

export default Search;