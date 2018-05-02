import React, { Component } from 'react';
import { search } from '../inc/spotify-api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions';


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
          searchType: ['track', 'artist'] // Required
    
        };
    
        // Search - Make request to Spotify API:
        const promise = search(query);
        
        // If request is successful:
        promise.then( (data) => {
            this.props.fetchData(data);
        });
    
        // If request failed:
        promise.catch( (error) => {
          console.log(error);
        });
    
        this.setState({
            keyword: ''
        });
    }


    
    render() {

        return(

            <div>
                
                <form className="form-group" action="" onSubmit={ this.handleQuery } >

                    <input className="form-control" value={ this.state.keyword } type="text" placeholder="Search for track or artist" onChange={ this.handleChange } />

                </form>

            </div>

        );

    }

}


const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ fetchData }, dispatch);

}


export default connect( null, mapDispatchToProps )(Search);