import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import Frame from './Frame';
import './App.css';

const App: FunctionComponent = () => {
  const [data, setData] = useState({ trees: [], loading: true, error: null });
  const treeDataUrl = 'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json';

  const fetchDataAndSetState = () => {
    axios
      .get(treeDataUrl)
      .then(({ data }) => {
        setData({ ...data, loading: false });
      })
      .catch(error => {
        setData({ trees: [], error: error, loading: false });
      });
  }

  useEffect(() => { fetchDataAndSetState() }, []);
  return (
    <div className="App">
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
          <Frame tree={tree} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default App;
