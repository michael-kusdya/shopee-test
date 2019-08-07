import React from 'react';
import Result from './Result';
import { shallow } from 'enzyme';

describe('<Result />', () => {

    const currency = [{
        code: 'IDR',
        name: 'Indonesia Rupiah',
        value: 1234  
      },{
          code: 'INR',
          name: 'Indian Rupee',
          value: 22121  
      }]

    it('renders list of currencies', () => {
       const result = shallow(<Result displayedCurrencies={currency} />)

       expect(result.find('.item')).toBeDefined();
       expect(result.find('.item')).toHaveLength(currency.length);
     });

    it('renders correct text in item', () => {
      const result = shallow(<Result displayedCurrencies={currency} />);

      expect(result.contains(<p>IDR - Indonesia Rupiah</p>)).toBeTruthy();
    });
    
})
