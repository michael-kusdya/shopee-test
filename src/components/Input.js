import React, { Component } from 'react'
import Input from '@material-ui/core/Input';  
import InputAdornment from '@material-ui/core/InputAdornment';

class InputValue extends Component {

    render(){
        return(
            <Input
                id="standard-uncontrolled"
                placeholder="Place your number"
                onChange={this.props.onValueChange(this.props.value)}
                value={this.props.value}
                type="number"
                style={{width: '100%'}}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
        )
    }
}

export default InputValue