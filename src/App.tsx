/**
 * App.tsx
 * This is the main file holding most of the logic
 * so start here and check out individual components that this one imports
 */

// libs
import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// ours
import Search from './Search';
import Gallery from './Gallery';
import ShowAllPhotos from './ShowAllPhotos';

// a single tree info in the api response
export type Tree = {
  image: string;
  name: string;
  species_name: string;
};


const Footer=styled.footer`
  min-height: 200px;
  margin: 100px auto 30px;
  padding: 10px;
`;
const AppWrapper = styled.div`
  height: 100%;
  font-family: 'Helvetica', 'Arial', 'sans-serif';
`;

const App: FunctionComponent = () => {
  interface IDataState {
    trees: Tree[];
    loading: boolean;
    error: any;
  }
  const initialData = { trees: [], loading: true, error: null };
  // main hook that keeps tree data from api
  const [data, setData] = useState<IDataState>(initialData);

  // hook for the search
  const [searchText, setSearchText] = useState('');

  // hook for toggling all photos
  const [showAllPhotos, setShowAllPhotos] = useState(false);

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
    <AppWrapper>
      <Search setSearchText={setSearchText} />
      <ShowAllPhotos
        setShowAllPhotos={setShowAllPhotos}
        showAllPhotos={showAllPhotos}
      />

      {/* loading indicator */}
      {data.loading && <p>Loading...</p>}

      {/* error handling */}
      {data.error && (
        <p>
          Failed to load tree data, check dev console{' '}
          {console.error(data.error)}
        </p>
      )}

      {/* main component */}
      <Gallery
        trees={data.trees}
        searchText={searchText}
        showAllPhotos={showAllPhotos}
      />

    <Footer />
    </AppWrapper>
  );
};

export default App;
