import React, { Component } from 'react';
import AUTH_URI from '../inc/auth_uri';
import hashParams from '../inc/hashParams';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      accessToken: '',

    }
  }



  componentDidMount() {
    
    const hash = window.location.hash;
    const accessToken = hashParams(hash).access_token;
    
    if(accessToken) {

      this.setState({ accessToken });

      window.sessionStorage.token = accessToken;

    }
    // console.log(accessToken);

  }
  


  redirectToAuth() {
    window.location = AUTH_URI;
    
  }


  handleQuery() {
    
    const accessToken = this.state.accessToken;

    if(!accessToken) { return; }
    
    const keyword = encodeURIComponent('chainsmoker');
    const searchType = ['album', 'artist', 'playlist', 'track'];

    // Make request to Spotify API:
    const promise = fetch(`https://api.spotify.com/v1/search?q=artist:${ keyword }&type=${ searchType }`, {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    });
    
    // If request is successful:
    promise.then( (res) => {
      return res.json();
    })
    .then( (data) => {
      console.log(data);
    });

    // If request failed:
    promise.catch( (error) => {
      console.log(error);
    });

    console.log(accessToken, window.sessionStorage);

  }

  render() {
    // console.log(this.state.accessToken);
    return (

      <div className="">

        { this.handleQuery() }

        <button onClick={ () => this.redirectToAuth() } >
          GET STARTED
        </button>
      
      </div>
    
  );
  }
}

export default App;
