import React, { Component } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import Categories from './Categories';


class Browse extends Component {

    render() {

        return(

            <div className="container">

                <Search />
                <SearchResult />
                <Categories />

            </div>

        );

    }

}

export default Browse;