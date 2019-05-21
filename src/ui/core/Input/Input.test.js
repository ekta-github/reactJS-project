import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Input from ".";

describe('Test suite for Input Component', function() {
  it('should render to static HTML', function() {
	expect(render(<Input data-pid="postCode" value="B5 4US" onChange="test()"/>).attr().value).toEqual('B5 4US');
  });
  it('should validate the placeholder', function() {
    expect(render(<Input data-pid="postCode" placeholder="PostCode"/>).attr().placeholder).toEqual('PostCode');
  });
  it('should mount in a full DOM', function() {
    expect(mount(<Input data-pid="postCode" className="inputField"/>).find('.inputField').length).toBe(2);
  });   
  it('should identify the type of component', function() {
	  expect(shallow(<Input data-pid="postCode" />).type()).toEqual('input');
  });   
});