import React from 'react';
import { shallow } from 'enzyme';
import Frame from './Frame';

const mockTree = {
      "name": "Japanese red pine",
      "species_name": "Pinus densiflora",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG"
   };


describe('Frame component', () => {
  it('Shows tree name', () => {
    const wrapper = shallow(<Frame tree={mockTree}/>);
    const heading = wrapper.find('h1').text();
    expect(heading).toEqual(mockTree.name);
  });

  it('Shows species name', () => {
    const wrapper = shallow(<Frame tree={mockTree}/>);
    const subHeading = wrapper.find('h2').text();
    expect(subHeading).toEqual(mockTree.species_name);
  });

  it('Defaults button text to Show Image', () => {
    const wrapper = shallow(<Frame tree={mockTree}/>);
    const buttonText = wrapper.find('button').text();
    expect(buttonText).toEqual("Show Image");
  })

  it('Changes show image button text', () => {
    const wrapper = shallow(<Frame tree={mockTree}/>);
    const button = wrapper.find('button');
    button.simulate('click');
    const buttonText = wrapper.find('button').text();
    expect(buttonText).toEqual("Hide Image");
  })

  it('Shows the image on click', () => {
    const wrapper = shallow(<Frame tree={mockTree}/>);
    const button = wrapper.find('button');

    button.simulate('click');

    const image = wrapper.find('img');
    expect(image.hasClass('Image--is-visible')).toEqual(true);
  })
});
