import React, { Component } from 'react';
import { checkSession } from '../inc/checkSession';
import { getCategoryPlaylists } from '../inc/spotify-api';


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
    

    render() {

        const categories = this.state.data; console.log(categories);

        if (categories.length < 1) {
        
            return 'Loading...';
        
        } else if(categories[0].error) {
            checkSession();
            window.location.reload();

        } 



        return(
    
            <div className="">
    
                <h4>Genres</h4>
    
                <div className="row">
                    
                    {
                        categories.map( (data, i) => {
                            const item = data.playlists.items[0];
                            const imgURL = item.images[0].url;

                            return(

                                <div key={ i } className="col-lg-2 col-md-3 col-6 mb-4">

                                    <img className="img-fluid" src={ imgURL } alt={ item.name }/>

                                </div>

                            );

                        })
                    }

                </div>
    
            </div>
    
        );

    }

}

export default Categories;