import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCategoriesList } from '../inc/spotify-api';


class Categories extends Component {

    constructor() {
        super();

        this.state = {
            data: {}
        }
        
    }

    componentDidMount() {

        const query = {
            accessToken: window.sessionStorage.token
        }

        const promise = getCategoriesList(query);

        promise.then( (res) => {
            const data = res.categories.items;
            this.setState({ data });
        });

        promise.catch( (error) => {
            console.log(error);
        });
    }
    

    render() {

        const data = this.state.data;

        const list = !data ? '' : Object.keys(data).map( (n, i) => {
            const item = data[n];
            // console.log(item);
            return(

                <div key={ i } className="col-lg-3 col-md-6 mb-3" >

                    <img className="img-fluid" src={ item.icons[0].url } alt={ item.name } />

                    <div className="">
                    
                        { item.name }

                    </div>

                </div>

            );
        });

        return(
    
            <div className="container-fluid">
    
                <h3>Genres</h3>
    
                <div className="d-flex row">
                    
                    { list }
    
                </div>
    
            </div>
    
        );

    }

}

export default Categories;