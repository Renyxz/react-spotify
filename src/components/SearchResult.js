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

                    <ul className="list-group">
                        {
                            tracks.map( (track, i) => {
                                console.log(track);

                                const imgURL = track.album.images.length < 1 ? 'http://via.placeholder.com/100x100' : track.album.images[1].url;

                                return(

                                    <li key={ i } className="list-group-item">

                                        <img src={ imgURL } className="mr-5" width="100" alt={ track.name } />

                                        { track.name }

                                    </li>

                                );
                            })
                        }
                    </ul>

                </div>

                <br/>
                <br/>

                <div>
                    
                    <h4>Artists</h4>

                    <ul className="list-group">
                        {
                            artists.map( (artist, i) => {
                                console.log(artist);

                                const imgURL = artist.images.length < 1 ? 'http://via.placeholder.com/100x100' : artist.images[1].url;

                                return(

                                    <li key={ i } className="list-group-item">

                                        <img src={ imgURL } className="mr-5" width="100" alt={ artist.name } />

                                        { artist.name }

                                    </li>

                                );
                            })
                        }
                    </ul>

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