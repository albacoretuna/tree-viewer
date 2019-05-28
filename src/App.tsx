// libs
import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';

// ours
import Frame from './Frame';
import './App.css';

const App: FunctionComponent = () => {
  const [data, setData] = useState({ trees: [], loading: true, error: null });

  const fetchDataAndSetState = () => {
    const treeDataUrl =
      'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json';
    axios
      .get(treeDataUrl)
      .then(({ data }) => {
        setData({ ...data, loading: false });
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
        <h1>Trees We Love</h1>
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
        {data.trees.map((tree, index) => (
          <Frame
            tree={tree}
            key={index /*TODO in production get unique ids from backend*/}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
