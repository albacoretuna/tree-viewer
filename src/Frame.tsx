// Frame component, as in photo frame

// libs
import React, { useState, useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';

// ours
import { Tree } from './App';
import TreeDescription from './TreeDescription';

type FrameProps = {
  tree: Tree;
  showAllPhotos: boolean;
};

const Button = styled.button`
  background: rgba(0, 214, 255, 0.2);
  border: 2px solid black;
  padding: 10px;
  margin: 10px;
  margin: 30px 10px 10px 10px;
  min-width: 200px;
`;
Button.displayName = 'Button';

const ListItem = styled.li`
  text-align: center;
  list-style: none;
  border-radius: 4px;
  border: 2px solid black;
  padding: 20px;
  height: fit-content;
  color: #594b4b;
`;

type TreePhotoProps = {
  imageIsVisible: boolean;
};

const TreePhoto = styled.img<TreePhotoProps>`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 0;
  transition: max-height 0.25s ease-out;
  overflow: hidden;
  transition: max-height 0.25s ease-in;
  max-height: ${({ imageIsVisible }) => (imageIsVisible ? '500px' : '')};
`;

const LookUp = styled.p`
  color: grey;
  font-size: 12px;
`;

const getButtonText = (flag: boolean): string =>
  flag ? 'Hide Photo' : 'Show Photo';

const Frame: FunctionComponent<FrameProps> = ({ tree, showAllPhotos }) => {
  const [imageIsVisible, setImageIsVisible] = useState(showAllPhotos);

  useEffect(
    () => {
      setImageIsVisible(showAllPhotos);
    },
    [showAllPhotos]
  );
  return (
    <ListItem>
      <h1>{tree.name}</h1>
      <h2>{tree.species_name}</h2>
      <LookUp>
        <a href={'https://www.ecosia.org/search?q=' + tree.name}>
          Look {tree.name} up
        </a>
      </LookUp>
      <Button onClick={() => setImageIsVisible(!imageIsVisible)}>
        {getButtonText(imageIsVisible)}
      </Button>
      <TreePhoto
        src={tree.image}
        alt={tree.name}
        imageIsVisible={imageIsVisible}
      />
      <TreeDescription speciesName = {tree.species_name} />
    </ListItem>
  );
};

Frame.defaultProps = {
  showAllPhotos: false
};

export default Frame;
