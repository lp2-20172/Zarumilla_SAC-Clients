import React, { Component } from 'react';
import ContactenosAgregar from './Contactenos/ContactenosAgregar';
import ContactenosList from './Contactenos/ContactenosList';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';




import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});


class Contactenos extends Component  {
  
  render() {
    
    return (
      
      <div>
         <TextField
         id="placeholder"
         label="Nombre"
         InputProps={{ placeholder: 'Nombre' }}
         helperText=""
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="Apellidos"
         InputProps={{ placeholder: 'Apellidos' }}
         helperText=""
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="DNI"
         InputProps={{ placeholder: 'Placeholder' }}
         helperText=""
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="Celular"
         InputProps={{ placeholder: 'Celular' }}
         helperText=""
         fullWidth
         margin="10px"
       />
       <TextField
         id="placeholder"
         label="Email"
         InputProps={{ placeholder: 'Email' }}
         helperText=""
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="Consulta"
         InputProps={{ placeholder: 'Consulta' }}
         helperText=""
         fullWidth
         margin="normal"
       />
       <div><Button raised color="accent" disabled >
       Enviar Consulta
     </Button></div>

      </div>
       
    );
  }
}


export default Contactenos ;