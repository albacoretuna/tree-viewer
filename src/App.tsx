import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import './App.css';


type Tree = {
  image: string,
  name: string,
  species_name: string
}

type FrameProps = {
  tree: Tree;
};


const getButtonText = (flag: boolean): string =>
  flag ? 'Hide Image' : 'Show Image';

const Frame: FunctionComponent<FrameProps> = ({ tree }) => {
  const [imageIsVisible, setImageIsVisible] = useState(false);
  return (
    <li className="Frame">
      <h1>{tree.name}</h1>
      <h2>{tree.species_name}</h2>
      <img
        src={tree.image}
        alt={tree.name}
        className={imageIsVisible ? 'Image' : 'Image Image--is-hidden'}
      />
      <button
        className="Button"
        onClick={() => setImageIsVisible(!imageIsVisible)}
      >
        {getButtonText(imageIsVisible)}
      </button>
    </li>
  );
};

const App: FunctionComponent = () => {
  const [data, setData] = useState({ trees: [], loading: true, error: null });

  useEffect(() => {
    axios
      .get(
        'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json'
      )
      .then(({ data }) => {
        setData({...data, loading: false});
      })
      .catch(error => {
        setData({trees: [], error: error, loading: false});
      })
  }, []);
  return (
    <div className="App">
      {/* loading indicator */}
      {data.loading && <p>Loading...</p>}

      {/* error handling */}
      {data.error && <p>Failed to load tree data, check dev console {console.error(data.error)}</p>}
      <ul className="Gallery">
        {data.trees.map((tree, index) => (
          <Frame tree={tree} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default App;
