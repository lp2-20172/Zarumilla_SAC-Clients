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
          label="Nombre"
          placeholder="Nombre"
          multiline
          margin="normal"
          
        />
        <TextField
          label="Apellido"
          placeholder="Apellido"
          multiline
         
          
        />
        <TextField
          label="DNI"
          placeholder="DNI"
          multiline
          margin="normal"
          
        />
        <TextField
          label="Celular"
          placeholder="Celular"
          multiline
          margin="normal"
          
        />
        <TextField
          label="Correo Electronico"
          placeholder="Correo Electronico"
          
         
          
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