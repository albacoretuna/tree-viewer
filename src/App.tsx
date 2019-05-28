import React, { useState } from 'react';
import './App.css';
const data = {
  "trees": [
    {
      "name": "Baobab",
      "species_name": "Adansonia",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
    },
    {
      "name": "Red Mangrove",
      "species_name": "Rhizophora mangle",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg"
    },
    {
      "name": "Common Hornbeam",
      "species_name": "Carpinus betulus",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg"
    },
    {
      "name": "Turkey Oak",
      "species_name": "Quercus cerris",
      "image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG"
    },
    {
      "name": "Japanese red pine",
      "species_name": "Pinus densiflora",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG"
    }
  ]
}

const getButtonText = (flag: boolean) : string => flag ? "Hide Image" : "Show Image"
const Frame = (tree: any, index: number) => {
  const [imageIsVisible, setImageIsVisible] = useState(false);
  console.log(tree);
        return <li className="Frame" key={index /*TODO use a unique id in production*/}>
        <h1>{tree.name}</h1>
        <h2>{tree.species_name}</h2>
        { imageIsVisible && <img src={tree.image} alt = {tree.name} className="Image"/> }
        <button onClick={() => setImageIsVisible(!imageIsVisible)}>{getButtonText(imageIsVisible)}</button>
        </li>
}
const App: React.FC = () => {
  return (
    <div className="App">
      <section>
      <ul className="Gallery">
      {
      data.trees.map(Frame)}
      </ul>
      </section>
    </div>);
}

export default App;
