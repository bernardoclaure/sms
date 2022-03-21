import React, { useState } from 'react';
import {TextField, Container, Button, Grid} from '@material-ui/core'

class Formulario extends React.Component {
    render() {
    const { value , onChangeValue } = this.props;
    return ( 
       <Grid>
           <TextField id="outlined-basic" label="Mensaje" variant="outlined"
           value={value} onChange={onChangeValue}/>
       </Grid>
     );
}
}
export default Formulario;