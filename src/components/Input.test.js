import React from 'react';
import Input from './Input';
import { mount } from 'enzyme';

describe('<Input />', () => {

  const onValueChange = () => {
    console.log('test');
  }

  it('renders an input to change amount of base currency', () => {
    const input = mount(<Input onValueChange={onValueChange}/>)
      
    expect(input.find('input')).toBeDefined();
  });
})
