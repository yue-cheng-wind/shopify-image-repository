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



export default SearchBar