import React from 'react';
import Categories from './Categories';


const Navbar = () => {

    return(

        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <i className="navbar-brand">ReactSpotify</i>
                
                <div className="navbar-nav ml-auto">
                    <button className="nav-item btn btn-dark" type="button"  data-toggle="modal" data-target="#categoriesModalCenter">
                        Explore genres
                    </button>

                    <Categories />
                </div>

                {/* <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="http://via.placeholder.com/150x150" alt="profile" width="35" height="35"/>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button">Sign out</button>
                    </div>
                </div> */}
            </nav>

        </div>

    );

};

export default Navbar;