import React, { Component } from 'react';
import Search from './Search';
import Categories from './Categories';


class Browse extends Component {

    render() {

        return(

            <div className="container">

                <Search />

                <Categories />

            </div>

        );

    }

}

export default Browse;