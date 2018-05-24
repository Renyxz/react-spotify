import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategory } from '../actions';
import { checkSession } from '../inc/checkSession';
import { setDataSession } from '../inc/setDataSession';
import { getCategoryPlaylists, getPlaylistTracks } from '../inc/spotify-api';


class Categories extends Component {

    constructor() {
        super();

        this.state = {
            data: [],
            categoryIds: [
                'toplists', 'rnb', 'hiphop', 'rock', 'edm_dance',
                'indie_alt', 'popculture', 'latin', 'chill', 'party'
            ]
        }
        
    }

    componentDidMount() {

        const dataSession = window.sessionStorage.getItem('categories');

        if(dataSession !== null) {
            this.setState({
                data: this.state.data.concat(JSON.parse(dataSession))
            });
            return;
        }

        const query = {
            accessToken: window.sessionStorage.token,
            method: 'GET'
        }
        
        const categoryIds = this.state.categoryIds;

        categoryIds.forEach( id => {
            const promise = getCategoryPlaylists(query, id);
    
            promise.then( res => {
                
                if(!res) {
                    return;
                }

                const data = res.data.playlists.items[0];

                this.setState({
                    data: this.state.data.concat(data)
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
            method: 'GET',
            user_id: params.user_id,
            playlist_id: params.playlist_id
        };

        const promise = getPlaylistTracks(query);

        promise.then( (res) => {
            const data = res.data.items;
            this.props.fetchCategory(data);
        });

        promise.catch( error => {
            console.log(error);
        });

    }


    render() {
        const dataSession = window.sessionStorage.getItem('categories');
        const categories = this.state.data; console.log(categories);

        if (categories.length < 1) {
        
            return '';
        
        } else if(categories[0].error) {
            checkSession();
            window.location.reload();

        } 

        if(dataSession === null && categories.length === 10) {
            const item = {
                key: 'categories',
                data: JSON.stringify(categories)
            };

            setDataSession(item);
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
                                    categories.map( (item, i) => {
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


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCategory }, dispatch);
};

export default connect(null, mapDispatchToProps)(Categories);