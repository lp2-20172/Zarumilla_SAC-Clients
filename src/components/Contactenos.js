import React, { Component } from 'react';
import ContactenosAgregar from './Contactenos/ContactenosAgregar';
import ContactenosList from './Contactenos/ContactenosList';
import Grid from 'material-ui/Grid';


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


class Contactenos extends Component {
  render() {
    return (
      <div>
         <TextField
         id="placeholder"
         label="NOmbre"
         InputProps={{ placeholder: 'Placeholder' }}
         helperText="Full width!"
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="Label"
         InputProps={{ placeholder: 'Placeholder' }}
         helperText="Full width!"
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="Label"
         InputProps={{ placeholder: 'Placeholder' }}
         helperText="Full width!"
         fullWidth
         margin="normal"
       />
       <TextField
         id="placeholder"
         label="Label"
         InputProps={{ placeholder: 'Placeholder' }}
         helperText="Full width!"
         fullWidth
         margin="normal"
       />

      </div>
    );
  }
}

export default Contactenos;