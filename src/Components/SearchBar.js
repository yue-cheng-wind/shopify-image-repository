import React from 'react';
import './SearchBar.css';

const SearchBar = ({ input, updateInput }) => {

    return (
        <div className="searchbox">
            <input
                type="text"
                class="searchTerm"
                value={input}
                placeholder={"Search by Name"}
                onChange={updateInput}
            />

        </div>



    );
}


// <div class="wrap">
//    <div class="search">
//       <input type="text" class="searchTerm" placeholder="What are you looking for?">
//       <button type="submit" class="searchButton">
//         <i class="fa fa-search"></i>
//      </button>
//    </div>
// </div>

export default SearchBar