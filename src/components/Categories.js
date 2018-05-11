import React, { Component } from 'react';
import { checkSession } from '../inc/checkSession';
import { getCategoryPlaylists, getPlaylistTracks } from '../inc/spotify-api';


class Categories extends Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
        
    }

    componentDidMount() {

        const query = {
            accessToken: window.sessionStorage.token,
        }
        
        const categoryIds = [
            'toplists', 'rnb', 'hiphop', 'rock', 'edm_dance',
            'indie_alt', 'popculture', 'latin', 'chill', 'party'
        ];

        categoryIds.forEach( id => {

            const promise = getCategoryPlaylists(query, id);
    
            promise.then( res => {
                this.setState({
                    data: this.state.data.concat(res)
                });
            });

            promise.catch( error => {
                console.log(error);
            });

        });
        

    }
    

    // get playlist of a category
    handleCategoryPlaylist(params) {

        const query = {
            accessToken: window.sessionStorage.token,
            user_id: params.user_id,
            playlist_id: params.playlist_id
        };

        const promise = getPlaylistTracks(query);

        promise.then( res => {
            console.log(res);
            // TODO: dispatch getPlaylistTracks
        });

        promise.catch( error => {
            console.log(error);
        });

    }


    render() {

        const categories = this.state.data; console.log(categories);

        if (categories.length < 1) {
        
            return 'Loading...';
        
        } else if(categories[0].error) {
            checkSession();
            window.location.reload();

        } 



        return(
            
            <div className="modal fade" id="categoriesModalCenter" tabIndex="-1" role="dialog" aria-labelledby="categoriesModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="categoriesModalCenterTitle">Genres</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            
                            <div className="row">
                                
                                {
                                    categories.map( (data, i) => {
                                        const item = data.playlists.items[0];
                                        const imgURL = item.images[0].url;

                                        const params = {
                                            user_id: item.owner.id,
                                            playlist_id: item.id
                                        };

                                        return(

                                            <div key={ i } className="col-sm-6 mb-4" onClick={ () => this.handleCategoryPlaylist(params) } data-dismiss="modal">

                                                <img className="img-fluid" src={ imgURL } alt={ item.name } width="100%"/>

                                            </div>

                                        );

                                    })
                                }

                            </div>

                        </div>

                    </div>

                </div>
            </div>
    
        );

    }

}

export default Categories;