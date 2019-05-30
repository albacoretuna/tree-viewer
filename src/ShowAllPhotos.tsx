// libs
import React, { FunctionComponent } from 'react';

const getButtonText = (showAllPhotos: boolean): string =>
  showAllPhotos ? 'Hide All photos' : 'Show all photos';

// A button to open/collapse all photos
const ShowAllPhotos: FunctionComponent<any> = ({showAllPhotos, setShowAllPhotos}) =>
        <button className="Button" onClick={() => setShowAllPhotos(!showAllPhotos)}>
          {getButtonText(showAllPhotos)}
        </button>
export default ShowAllPhotos;
