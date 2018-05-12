import React, { Component } from 'react';
import { getMyPlaylists, addTracksToPlaylist } from '../inc/spotify-api';


class AddToPlaylist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playlists: []
        }
        this.getPlaylists = this.getPlaylists.bind(this);
    }


    // Get current user's playlists
    getPlaylists() {

        if(this.state.playlists > 0) {
            return;
        }

        const query = {
            accessToken: window.sessionStorage.token
        };

        const promise = getMyPlaylists(query);

        promise.then( res => {
            console.log(res);
            this.setState({
                playlists: res.items
            });
        });

        promise.catch( error => {
            console.log(error);
        });

    }


    // Add track to a playlist
    addTrackToPlaylist(params) {

        const query = {
            accessToken: window.sessionStorage.token,
            method: 'POST',
            playlist_id: params.playlist_id,
            user_id: params.user_id,
            track_id: params.track_id
        };

        const promise = addTracksToPlaylist(query);

        promise.then( res => {
            console.log(res);
        });

        promise.catch( error => {
            console.log(error);
        });

    }


    render() {
        console.log(this.state.playlists);

        const playlistsArray = this.state.playlists;

        const playlists = playlistsArray.length < 1 ? null 
        : playlistsArray.map( (playlist, i) => {

            const params = {
                playlist_id: playlist.id,
                user_id: playlist.owner.id,
                track_id: this.props.track
            };

            return(

                <li key={ i } className="p-1 d-flex justify-content-between">

                    <div>

                        <img src={ playlist.images[0].url } alt={ `${ playlist.name } cover` } width="50" height="50" className="img-fluid mr-3" />

                        { playlist.name }

                    </div>

                    <button className="btn btn-sm btn-secondary pl-3 pr-3" type="button" data-dismiss="modal" onClick={ () => this.addTrackToPlaylist(params) }>
                        <i className="fas fa-check"></i>
                    </button>
                </li>

            );

        });



        return(
    
            <div>
                
                <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#ModalCenter" onClick={ this.getPlaylists } >
                    <i className="fas fa-heart"></i>
                </button>
    
                <div className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="ModalCenterTitle">Add track to playlist</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <ul className="list-group">
                                    { playlists }
                                </ul>
                            </div>

                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div> */}

                        </div>

                    </div>
                </div>
    
            </div>
    
        );
    
    }

}

export default AddToPlaylist;