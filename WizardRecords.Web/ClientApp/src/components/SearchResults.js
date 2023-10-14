import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    // Get the search query from the URL
    const searchQuery = new URLSearchParams(useLocation().search).get('query');

    // TODO: Implement your search logic and display the results

    return (
        <div>
            <h2>Search Results for "{searchQuery}"</h2>
            {/* Display the search results here */}
        </div>
    );
};

export default SearchResults;
