// Frame component, as in photo frame

// libs
import React, { useState, useEffect, FunctionComponent } from 'react';

// ours
import { Tree } from './App'


type FrameProps = {
  tree: Tree;
  showAllPhotos: boolean;
};

const getButtonText = (flag: boolean): string =>
  flag ? 'Hide Photo' : 'Show Photo';

const Frame: FunctionComponent<FrameProps> = ({ tree, showAllPhotos }) => {
  const [imageIsVisible, setImageIsVisible] = useState(showAllPhotos);

  useEffect(() => {
    setImageIsVisible(showAllPhotos);
  }, [showAllPhotos])
  return (
    <li className="Frame">
      <h1>{tree.name}</h1>
      <h2>{tree.species_name}</h2>
      <button
        className="Button"
        onClick={() => setImageIsVisible(!imageIsVisible)}
      >
        {getButtonText(imageIsVisible)}
      </button>
      <img
        src={tree.image}
        alt={tree.name}
        className={imageIsVisible ? 'Image Image--is-visible' : 'Image'}
      />
    </li>
  );
};

Frame.defaultProps = {
  showAllPhotos: false
};

export default Frame;
