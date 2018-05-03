import React, { Component } from 'react';
import { connect } from 'react-redux';



class SearchResult extends Component {


    render() {

        const searchResult = this.props.data;
        
        // If no data
        if (searchResult.length < 1) {
            
            return(
                
                <div className="jumbotron text-center">
                    <h1>Search for your hit music</h1>
                </div>
    
            );
        }

        const tracks = searchResult[0].tracks.items;
        const artists = searchResult[0].artists.items;
        // console.log(artists, tracks);

        return(

            <div>

                <div>

                    <h4>Tracks</h4>

                    <div>
                        {
                            tracks.map( (track, i) => {

                                const trackURL = `https://open.spotify.com/embed?uri=${ track.uri }`;

                                return(

                                    <div key={ i }>

                                        <iframe src={ trackURL } width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title={ track.name } ></iframe>

                                    </div>

                                );
                            })
                        }
                    </div>

                </div>

                <br/>
                <br/>

                <div>
                    
                    <h4>Artists</h4>

                    <div>
                        {
                            artists.length < 1 ? 'No artist found.'
                            : artists.map( (artist, i) => {

                                const artistURL = `https://open.spotify.com/follow/1/?uri=${ artist.uri }&size=detail&theme=light`;

                                return(

                                    <div key={ i }>

                                        <iframe src={ artistURL } width="100%" height="100" scrolling="no" frameBorder="0" style={{ border:'none', overflow:'hidden' }} allowtransparency="true" title={ artist.name } ></iframe>

                                    </div>

                                );
                            })
                        }
                    </div>

                </div>

                <br/>
                <br/>

            </div>

        );

    }

}


const mapStateToProps = ({ data }) => {

    return {
        data
    };

};


export default connect( mapStateToProps )(SearchResult);