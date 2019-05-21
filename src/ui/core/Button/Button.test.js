import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Button from ".";

describe('Test suite for Button Component', function() {
  it('should be selectable by class btn-primary', function() {
    expect(shallow(<Button className="btn-primary"/>).is('.btn-primary')).toBe(true);
  });
  it('should mount in a full DOM', function() {
    expect(mount(<Button className="btn"/>).find('.btn').length).toBe(2);
  });
  it('should render to static HTML', function() {
    expect(render(<Button children ="Continue"/>).text()).toEqual('Continue');
  });  
  it('should identify the type of component', function() {
    expect(shallow(<Button />).type()).toEqual('button');
  });  
});