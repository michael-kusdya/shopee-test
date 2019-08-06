import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';

const styles = ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    marginLeft: 8,
    width: 200
  },
});
class AddMoreCurrency extends Component {

    render(){
        const { classes } = this.props;

        if (this.props.showAddMoreInput) {
            return (
                <Paper className={classes.root}>
                    <TextField
                        select
                        label="Select New Currency"
                        className={classes.textField}
                        value={this.props.newCurrency}
                        placeholder="Add More Currency"
                        onChange={this.props.onSelectNewCurrency}
                        style={{width: '100%'}}
                    >
                    
                    <MenuItem key={0} value='INR'> Indian Rupee </MenuItem>
                    <MenuItem key={1} value='KRW'> Korean Won </MenuItem>
                    <MenuItem key={2} value='JPY'> Japanese Yen </MenuItem>
                    <MenuItem key={3} value='MYR'> Malaysia Ringgit </MenuItem>

                    </TextField>
                </Paper>
            );
        }
        return (
            <Paper className={classes.root} onClick={this.props.toggleMoreCurrencyInput}>
                <AddIcon style={{display: 'inline'}}/>
                <h3 style={{display: 'inline'}}>Add More currency</h3>
            </Paper>
        );
    }
}

export default withStyles(styles)(AddMoreCurrency)