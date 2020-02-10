import React from 'react';
import ArrowPointer from './ArrowPointer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('ArrowPointer Component', () => {
    it('render the FontAwesomeIcon Component', () => {
        const wrapper = shallow(<ArrowPointer />);
        expect(wrapper.find(FontAwesomeIcon)).to.have.length(1);
    });

    it('render the FontAwesomeIcon Component with positive status', () => {
        const wrapper = shallow(<ArrowPointer status={0} />);
        expect(wrapper.find('.red')).to.have.length(1);
    });

    it('render the FontAwesomeIcon Component with negative status', () => {
        const wrapper = shallow(<ArrowPointer status={1} />);
        expect(wrapper.find('.green')).to.have.length(1);
    });
});
