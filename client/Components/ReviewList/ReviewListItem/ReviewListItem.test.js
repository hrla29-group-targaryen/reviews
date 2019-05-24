import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReviewListItem from './ReviewListItem';

it('should render ReviewListItem component', ()=> {
	expect(shallow(<ReviewListItem />).length).toEqual(1)
})