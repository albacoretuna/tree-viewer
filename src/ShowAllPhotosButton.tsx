// libs
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const getButtonText = (showAllPhotos: boolean): string =>
  showAllPhotos ? 'Hide All photos' : 'Show all photos';

const Button = styled.button`
  background: rgba(167, 207, 215, 0.2);
  text-transform: uppercase;
  border: 1px solid black;
  padding: 10px;
  margin: 30px 10px 10px 10px;
  min-width: 200px;
`;

// A button to open/collapse all photos
const ShowAllPhotos: FunctionComponent<any> = ({showAllPhotos, setShowAllPhotos}) =>
        <Button onClick={() => setShowAllPhotos(!showAllPhotos)}>
          {getButtonText(showAllPhotos)}
        </Button>
export default ShowAllPhotos;
