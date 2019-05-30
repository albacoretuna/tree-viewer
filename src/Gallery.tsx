// libs
import React, { FunctionComponent } from 'react';

// ours
import { Tree } from './App'
import Frame from './Frame';

const Gallery: FunctionComponent<any> = ({trees, showAllPhotos, searchText}) =>
      <ul className="Gallery">
        {trees
          .filter(
            (tree: Tree) =>
              tree.name && tree.name.toLowerCase().includes(searchText)
          )
          .map((tree: Tree, index: number) => (
            <Frame
              tree={tree}
              key={index /*TODO in production get unique ids from backend*/}
              showAllPhotos={showAllPhotos}
            />
          ))}
      </ul>

export default Gallery;
