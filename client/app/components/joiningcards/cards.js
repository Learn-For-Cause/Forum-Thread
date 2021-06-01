import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';

import useStyles from './style';

const Cards = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Card className={classes.root}
        style={{
          margin: 'auto',
          marginRight: '50%',
          background: 'linear-gradient(to top left, #ffe6ce, #ffffff)',
        }}>
        <Typography variant='h5' style={{
          marginTop: 20,
        }}>
          <FormatAlignCenterIcon />
        &nbsp;stack <b>overflow</b></Typography>
        <CardMedia
          className={classes.media}
          image="https://www.transparentpng.com/thumb/web-development/web-development-clipart-icon-2.png"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="p" color="textPrimary" component="p" style={{ fontWeight: 'bolder' }}>
            <b>A public platform builing the definitive colletion of coding questions and answers.</b>
          </Typography>
          <Typography variant="p" color="textPrimary" component="p" style={{ paddingTop: 10 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Typography>
        </CardContent>
        <Button variant="contained" style={{
          backgroundColor: 'orange',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 4,
        }}>
          Join the Community
        </Button>
        <Typography color="textPrimary" variant="p" component="p" style={{
          marginBottom: 10,
        }}>
          or&nbsp;
        <Link href="#" color="inherit">
            not visible
        </Link>
        </Typography>
      </Card>
      <Card className={classes.root}
        style={{
          margin: 'auto',
          marginLeft: '50%',
          background: 'linear-gradient(to top right, #8DEEEE, #ffffff)',
        }}>
        <Typography variant='h6' style={{
          marginTop: 20,
        }}>
          <FormatAlignCenterIcon />
        &nbsp; <b>FOR TEAMS</b>
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://www.transparentpng.com/thumb/web-development/web-development-amazing-image-download-0.png"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="p" color="textPrimary" component="p" style={{ fontWeight: 'bolder' }}>
            <b>A private collaboration & knowledge sharing SaaS platform for companies platform.</b>
          </Typography>
          <Typography variant="p" color="textPrimary" component="p" style={{ paddingTop: 10 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Typography>
        </CardContent>
        <Button variant="contained" style={{
          backgroundColor: 'orange',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: 4,
        }}>
          Create your team
        </Button>
        <Typography color="textPrimary" variant="p" component="p" style={{
          marginBottom: 10,
        }}>
          or&nbsp;
        <Link href="#" color="inherit">
            not visible
        </Link>
        </Typography>
      </Card>
    </div>
  )
}

export default Cards;