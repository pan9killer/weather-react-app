import React from 'react';
import "./SearchBlock.css"

const SearchBlock = (city) => {
  return(
    <div className="search__block">
      <h1>Weather in</h1>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="City" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">&#128269;</button>
      </div>
    </div>
  )
}

export default SearchBlock;