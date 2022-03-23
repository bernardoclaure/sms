import React, { useState } from 'react';
import {TextField, Container, Button, Grid} from '@material-ui/core'

class Formulario extends React.Component {
    render() {
    const {  message, onChangeMessage } = this.props;
    return ( 
       <Grid>
           <TextField id="outlined-basic" label="Mensaje" variant="outlined"
           value={message} onChange={onChangeMessage}/>
       </Grid>
     );
}
}
export default Formulario;