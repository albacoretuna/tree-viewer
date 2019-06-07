// libs
import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  border: 2px solid green;
  padding: 20px 5px;
  min-width: 320px;
  margin-top: 10px;
  margin-right: 30px;
  height: 1.5em;
  font-size: 1.1em;
  border: none;
  border-bottom: 2px solid green;
  background: rgba(254,254,254,0.7);
`;

const Label = styled.label``;


// typings for hooks
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

type SearchProps = {
  setSearchText: Dispatch<SetStateAction<string>>
}

const Search: FunctionComponent<SearchProps> = ({setSearchText}) => <Fragment>
       <Label htmlFor="search">Fitler by tree name </Label>
        <Input
          id="search"
          type="search"
          placeholder="for example: Baobab"
          onChange={event => setSearchText(event.target.value.toLowerCase())}
        />
</Fragment>

export default Search;

