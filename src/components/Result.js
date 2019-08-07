import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Result extends Component {
    
    render(){
        return this.props.displayedCurrencies.map((res, index) => {
            return (
                <Card style={{marginTop: '20px'}} key={index} className="item">
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item sm={10}>
                                <h3>{res.code}</h3>
                            </Grid>
                            <Grid item sm={2}>
                                <p>{Math.round((res.value * this.props.value) * 100) / 100 }</p>
                            </Grid>
                        </Grid>     

                        <p>{res.code + ' - ' + res.name}</p>
                        <p>{'1 USD = ' + res.code + ' ' + res.value}</p>
                    </CardContent>   

                    <Grid container spacing={3}>
                        <Grid item sm={10}>
                        </Grid>
                        <Grid item sm={2}>
                            <CardActions disableSpacing>
                                <p style={{color: 'red'}}>Delete</p>          
                                <IconButton style={{color: 'red'}}>
                                    <DeleteIcon onClick={(e) => { 
                                        e.stopPropagation();
                                        this.props.deleteCard(res, index) 
                                      }} 
                                    />
                                </IconButton>
                            </CardActions>   
                        </Grid>
                    </Grid>
                                  
                </Card>
            )
        })
    }
}


export default Result;
