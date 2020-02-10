import React from 'react';
import List from './List';
import ListItem from '../ListItem/ListItem';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('List Component', () => {
    it('render the ul tag', () => {
        const wrapper = shallow(<List data={['a', 'b', 'c', 'd', 'e', 'd', 'f', 'z']} />);
        expect(wrapper.find('ul')).to.have.length(1);
    });

    it('render the ListItem Component', () => {
        const wrapper = shallow(<List data={['a', 'b', 'c', 'd', 'e', 'd', 'f', 'z']} />);
        expect(wrapper.find(ListItem)).to.have.length(8);
    });
});
