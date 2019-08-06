import React, { Component } from 'react';
import InputValue from './components/Input'
import Result from './components/Result';
import AddMoreCurrency from './components/AddMoreCurrency'

import axios from 'axios';
import Card from '@material-ui/core/Card';

class App extends Component {

  state = { 
    defaultCurrency: 'USD',
    value: 10.00,
    result: {},
    displayedCurrencies: [],
    showAddMoreInput: false,
    newCurrency: ''
  };

  currencyList = [
    { code: 'IDR', name : "Indonesian Rupiah" },
    { code: 'CAD', name : "Canadian Dollar" },
    { code: 'GBP', name : "UK Pound Sterlin", },
    { code: 'CHF', name : "Switzerland Franc" },
    { code: 'SGD', name : "Singapore Dollar" },
    { code: 'INR', name : "Indian Rupee" },
    { code: 'JPY', name : "Japanese Yen" },
    { code: 'KRW', name : "Korean Won" },
    { code: 'MYR', name : "Malaysia Ringgit" }
  ]

  componentDidMount(){
    this.fetchResult('USD');
  }

  fetchResult = async (currency) => {
    const response = await axios.get('https://api.exchangeratesapi.io/latest?base=' + currency)

    this.setState({ result: response.data.rates });

    for (var i = 0; i <= 4; i++) {
      if(this.state.result.hasOwnProperty(this.currencyList[i].code)){
          this.setState({
            displayedCurrencies: [...this.state.displayedCurrencies, {
              code: this.currencyList[i].code,
              name: this.currencyList[i].name,
              value: Math.round(this.state.result[this.currencyList[i].code] * 100) / 100 
            }]
          })
      }
    }
    
  }

  deleteCard = (card, index) => {
    let displayed = [...this.state.displayedCurrencies]
    displayed.splice(index, 1);
    this.setState({displayedCurrencies: displayed})
  }

  onValueChange = e => {
    if(e){
      this.setState({value: e.target.value})
    }    
  } 

  onSelectNewCurrency = (e) => {
    e.stopPropagation();
    this.setState({newCurrency: e.target.value}, this.addMoreCurrency)
  }

  toggleMoreCurrencyInput = () => {
    this.setState({showAddMoreInput: true})
  }

  addMoreCurrency = (e) => { 

    let newCurrency = this.state.newCurrency  

    if(newCurrency){
      let newCurrencyName = this.currencyList.find( function( currency ){
        return currency.code === newCurrency;
      } );
  
      for(var i = 0; i < this.currencyList.length; i++) {
        if (this.state.result.hasOwnProperty(newCurrency)) {
          this.setState({
            displayedCurrencies: [...this.state.displayedCurrencies, {
              code: newCurrency,
              name: newCurrencyName.name,
              value: Math.round(this.state.result[newCurrency] * 100) / 100 
            }]
          })
          
        }
      }
    }

  }

  render() {
    return (
      <div>

        <h3>USD - United States Dollar </h3>
        <InputValue 
          onValueChange={() => this.onValueChange} 
          value={this.state.value} 
        />
        <Result 
          displayedCurrencies={this.state.displayedCurrencies} 
          value={this.state.value} 
          deleteCard={this.deleteCard} 
        />

        <Card style={{marginTop: '20px'}}>
          <AddMoreCurrency 
            showAddMoreInput={this.state.showAddMoreInput} 
            onSelectNewCurrency={this.onSelectNewCurrency} 
            newCurrency={this.state.newCurrency}
            displayedCurrencies={this.state.displayedCurrencies}  
            toggleMoreCurrencyInput={this.toggleMoreCurrencyInput} 
          />
        </Card>

      </div>
    );
  }
}

export default App;
