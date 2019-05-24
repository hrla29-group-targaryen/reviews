import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewList from './ReviewList';

it('should render ReviewList component', ()=> {
	expect(shallow(<ReviewList />).length).toEqual(1)
})