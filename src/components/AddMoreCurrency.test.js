import React from 'react';
import { mount } from 'enzyme';
import AddMoreCurrency from './AddMoreCurrency';

describe('<AddMoreCurrency />', () => {

    it('renders dropdown to add more curency if showAddMoreInput = true', () => {
       const moreCurrency = mount(<AddMoreCurrency showAddMoreInput='true' newCurrency='IDR' />)

       expect(moreCurrency.find('.moreCurrencyDropdown')).toBeDefined();
    });

    it('renders button to toggle more curency dropdown if showAddMoreInput = false', () => {
       const moreCurrency = mount(<AddMoreCurrency showAddMoreInput='false' newCurrency='IDR' />)

       expect(moreCurrency.find('.toggleCurrencyDropdown')).toBeDefined();
    });
    
})
