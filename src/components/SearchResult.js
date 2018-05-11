import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecommendTracks from './RecommendTracks';
import AddToPlaylist from './AddToPlaylist';



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

        const tracks = searchResult[0].tracks;
        const artists = searchResult[0].artists;
        // console.log(artists, tracks);

        return(

            <div>

                <div>

                    <h4>Tracks</h4>

                    <div>
                        {
                            tracks.length < 1 ? 'No track found.'
                            : tracks.map( (track, i) => {

                                const trackURL = `https://open.spotify.com/embed?uri=${ track.uri }`;

                                const seed = {
                                    artists: [track.artists[0].id],
                                    tracks: [track.id],
                                };

                                setTimeout( () => {
                                    return (
                                        <div>Loading...</div>
                                    );
                                }, 5000);

                                return(

                                    <div key={ i } className="bg-dark d-flex flex-row">

                                        <iframe src={ trackURL } className="" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title={ track.name } ></iframe>

                                        <div>
                                            <RecommendTracks seed={ seed } />
                                            <AddToPlaylist track={ track.id } />
                                        </div>

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

                    <div className="row">
                        {
                            artists.length < 1 ? 'No artist found.'
                            : artists.map( (id, i) => {

                                const artistURL = `https://open.spotify.com/follow/1/?uri=spotify:artist:${ id }&size=detail&theme=light`;

                                return(

                                    <div key={ i } className="col-lg-4">

                                        <iframe src={ artistURL } width="100%" height="100" scrolling="no" frameBorder="0" style={{ border:'none', overflow:'hidden' }} allowtransparency="true" title={ id } ></iframe>

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