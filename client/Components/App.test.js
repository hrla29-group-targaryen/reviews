import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from './App';

it('should render App component', ()=> {
	expect(shallow(<App />).length).toEqual(1)
})