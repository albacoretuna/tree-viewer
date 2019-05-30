// libs
import React, { FunctionComponent, Fragment } from 'react';

const Search: FunctionComponent<any> = ({setSearchText}) => <Fragment>
         <label htmlFor="search" className="SearchLabel">Fitler by tree name </label>
        <input
          id="search"
          type="search"
          placeholder="for example: Baobab"
          className="SearchInput"
          onChange={event => setSearchText(event.target.value.toLowerCase())}
        />
</Fragment>

export default Search;

