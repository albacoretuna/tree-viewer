// Frame component, as in photo frame
import React, { useState, FunctionComponent } from 'react';

type Tree = {
  image: string;
  name: string;
  species_name: string;
};

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
        className={imageIsVisible ? 'Image Image--is-visible' : 'Image'}
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

export default Frame;