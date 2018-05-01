import React, { Component } from 'react';
import { connect } from 'react-redux';



class SearchResult extends Component {

    
    render() {

        const searchResult = this.props.data;
        
        // If no data
        if (searchResult.length === 0) {
            
            return(
                
                <div className="jumbotron text-center">
                    <h1>Search for your hit music</h1>
                </div>
    
            );
        }


        return(

            <div>

                {
                    Object.keys(searchResult).map( (type, i) => {
                        let typeTitle = type[0].toUpperCase() + type.slice(1);
                        const items = searchResult[type]['items'];
                        // console.log(items);

                        return(

                            <div key={ i } >
                                
                                <h4>{ typeTitle }</h4>

                                <div>
                                    {
                                        Object.keys(items).map( (item, i) => {
                                            const result = items[item];
                                            
                                            // TODO: Fix undefined error on url
                                            const imgURL = (type === 'tracks') ? result.album.images['1'].url 
                                            : (result.length === 0 || !result.images) ? null 
                                            :result.images['1'];

                                            const image = (result.length === 0) ? null
                                            : ( <img src={ imgURL } alt={ result.name } /> );
                                            
                                            console.log(imgURL)
                                            
                                            return(
                                                
                                                <div key={ i } >

                                                    { image }
                                                    
                                                    <p>{ result.name }</p>
                                                    
                                                </div>

                                            );
                                            
                                        })
                                    }
                                </div>

                            </div>

                        );

                    })
                }

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