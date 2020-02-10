import React from 'react';
import ShowPrice from './ShowPrice';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('ShowPrice Component', () => {
    it('render the h3 tag with price', () => {
        const wrapper = shallow(<ShowPrice price={'555.55'} />);
        expect(wrapper.find('h3')).to.have.length(1);
    });
});
