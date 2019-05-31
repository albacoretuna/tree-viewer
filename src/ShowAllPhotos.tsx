// libs
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const getButtonText = (showAllPhotos: boolean): string =>
  showAllPhotos ? 'Hide All photos' : 'Show all photos';

const Button = styled.button`
  background: rgba(0, 214, 255, 0.2);
  border: 2px solid black;
  padding: 10px;
  margin: 10px;
  margin: 30px 10px 10px 10px;
  min-width: 200px;
`;

// A button to open/collapse all photos
const ShowAllPhotos: FunctionComponent<any> = ({showAllPhotos, setShowAllPhotos}) =>
        <Button onClick={() => setShowAllPhotos(!showAllPhotos)}>
          {getButtonText(showAllPhotos)}
        </Button>
export default ShowAllPhotos;
