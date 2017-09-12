import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography'

class Footer extends Component {
    render() {
        return (
            <CardContent>
                
                <Typography type="subheading" color="secondary">
                Rentas de Oficina
                </Typography>
            </CardContent>
        );
    }
}

export default Footer;