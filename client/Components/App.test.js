import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';

describe('testing App component', ()=> {

	it('should render App component', () => {
		expect(shallow(<App />).length).toEqual(1)
	})

	it('should grab a snapshot of the component.', ()=> {
		const tree = renderer
		  .create(<App />)
		  .toJSON();
		expect(tree).toMatchSnapshot();
	})

})