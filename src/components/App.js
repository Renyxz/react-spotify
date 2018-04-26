import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { hashParams } from '../inc/spotify-api';



class App extends Component {

  componentDidMount() {
    
    const hash = window.location.hash;
    const accessToken = hashParams(hash).access_token;
    
    if(accessToken) {

      this.setState({ accessToken });

      window.sessionStorage.token = accessToken;

    }
    // console.log(accessToken);

  }
  


  render() {

    const accessToken = window.sessionStorage.token;

    if(accessToken) {

      return(

        <Redirect to="/browse" />

      );

    }



    return (

      <div className="">


      
      </div>
    
    );

  }
}

export default App;
