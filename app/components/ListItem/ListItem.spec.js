import React from 'react';
import ListItem from './ListItem';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('ListItem Component', () => {
    it('render the li tag', () => {
        const wrapper = shallow(<ListItem itemKey={'test'} itemValue={'test'} />);
        expect(wrapper.find('li')).to.have.length(1);
    });
});
