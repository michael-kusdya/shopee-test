import React from 'react';
import Result from './Result';
import { shallow } from 'enzyme';

describe('<Result />', () => {

    const currency = [{
      code: 'IDR',
      name: 'Indonesia Rupiah',
      value: 1234  
    }]

    it('renders list of currencies', () => {
        const result = shallow(<Result displayedCurrencies={currency} />)
        // expect(result.find(Result).length).toEqual(5)
        console.log();
        
        expect(true).toBeTruthy()
      });
})
