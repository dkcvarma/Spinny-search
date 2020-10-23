import React  from 'react';
import Card from '../../Card';
import './SearchResults.css';

const SearchResults = ({ searchResults }) =>  {
  return (
    <div className="search-results">
      {searchResults.length > 0 && searchResults.map((result) => {
        return <Card
          key={`${result.mal_id}_${result.title}`}
          imageUrl={result.image_url}
          url={result.url}
          title={result.title}
        />
      }) }
    </div>
  );
};

export default SearchResults;
