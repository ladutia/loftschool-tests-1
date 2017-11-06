import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('check correct render', () => {
  const wrapper = shallow(<App />);

  it('contain div with class App', () => {
    expect(wrapper.find('div.App')).toHaveLength(1);
  });

  it('contain header with class App-header', () => {
    expect(wrapper.find('header.App-header')).toHaveLength(1);
  });

  it('contain img with class App-logo', () => {
    expect(wrapper.find('img.App-logo')).toHaveLength(1);
  });

  it('contain p with class App-intro', () => {
    expect(wrapper.find('p.App-intro')).toHaveLength(1);
  });
});
