// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'http://www.arqhys.com/fotos/wp-content/uploads/2011/02/Fotos-de-oficinas-de-abogados.jpg',
    title: 'OFICINAS',
<<<<<<< HEAD
    width: '100%',
=======
    width: '50%',
>>>>>>> f25564c4bd77a737320f13d89180694119f6161e
  },
  {
    url: 'https://fotosdedecoracion.com/wp-content/uploads/2011/11/diseo-de-oficinas-de-abogados2.jpg',
    title: 'CONTACTENOS',
<<<<<<< HEAD
    width: '100%',
  },
  {
    url: 'https://www.google.com.pe/maps/vt/data=bh-79PcJB-iWIUE5fieKNvLqIXrgoRdJmS8yRX3Ij4JOMJCLwWgDKRI7ZPT0y-tcITsozOaFR0wIhbwLjgJ6TEUNScUKP1rDyxU16R37JKeO9751JZiTkmWJa9hi0PhHoYjOySIJimki9R9JLZorP2gz6Q8ajsZGA73LVcvUjWIEWkrlyI4Lu94RsiaI1G1UPUyX8Zv23tQMFPJu-ipHCA',
    title: 'UBIQUENOS',
    width: '100%',
=======
    width: '50%',
  },
  {
    url: 'https://www.google.com.pe/maps/vt/data=bh-79PcJB-iWIUE5fieKNvLqIXrgoRdJmS8yRX3Ij4JOMJCLwWgDKRI7ZPT0y-tcITsozOaFR0wIhbwLjgJ6TEUNScUKP1rDyxU16R37JKeO9751JZiTkmWJa9hi0PhHoYjOySIJimki9R9JLZorP2gz6Q8ajsZGA73LVcvUjWIEWkrlyI4Lu94RsiaI1G1UPUyX8Zv23tQMFPJu-ipHCA',
    title: 'RESERVACIONES',
    width: '50%',
>>>>>>> f25564c4bd77a737320f13d89180694119f6161e
  },
];

function ButtonBases(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          style={{
            width: image.width,
          }}
        >
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              type="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <div className={classes.imageMarked} />
            </Typography>
          </div>
        </ButtonBase>
      ))}
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);