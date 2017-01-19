import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';

import { Application } from '../../src/Application';
import { mockData } from '../../src/Actions'

describe('<Application />', () => {
  const mockProps = {
    dispatch: () => {},
    data: mockData
  };

  it('calls componentDidMount', () => {
    spy(Application.prototype, 'componentDidMount');
    const wrapper = mount(<Application { ...mockProps } />);
    expect(Application.prototype.componentDidMount.calledOnce).to.be.true;
  });

  it('should have link', () => {
    const wrapper = mount(<Application { ...mockProps } />);
    expect(wrapper.find('a').length).to.deep.equal(3);
  });
});