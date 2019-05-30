// libs
import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';

// ours
import Frame from './Frame';
import './App.css';

// a single tree info in the api response
export type Tree = {
  image: string;
  name: string;
  species_name: string;
};

const App: FunctionComponent = () => {
  interface IDataState {
    trees: Tree[];
    loading: boolean;
    error: any;
  }
  const initialData = { trees: [], loading: true, error: null };
  const [data, setData] = useState<IDataState>(initialData);
  const [searchText, setSearchText] = useState('');

  // read tree data from api and put it into state
  const fetchDataAndSetState = () => {
    const treeDataUrl =
      'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json';

    axios
      .get(treeDataUrl)
      .then(({ data }) => {
        setData({ ...data, error: null, loading: false });
      })
      .catch(error => {
        setData({ trees: [], error: error, loading: false });
      });
  };

  useEffect(() => {
    fetchDataAndSetState();
  }, []);

  return (
    <div className="App">
      <header className="Header">
        <label htmlFor="search">Fitler by tree name: </label>
        <input
          id="search"
          type="search"
          placeholder="for example: Baobab"
          className="SearchInput"
          onChange={event => setSearchText(event.target.value.toLowerCase())}
        />
      </header>
      {/* loading indicator */}
      {data.loading && <p>Loading...</p>}

      {/* error handling */}
      {data.error && (
        <p>
          Failed to load tree data, check dev console{' '}
          {console.error(data.error)}
        </p>
      )}
      <ul className="Gallery">
        {data.trees
          .filter(
            (tree: Tree) =>
              tree.name && tree.name.toLowerCase().includes(searchText)
          )
          .map((tree, index) => (
            <Frame
              tree={tree}
              key={index /*TODO in production get unique ids from backend*/}
            />
          ))}
      </ul>
      <footer className="Footer">We Need Trees</footer>
    </div>
  );
};

export default App;
