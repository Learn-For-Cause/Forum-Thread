import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  main: {
    maxWidth: 850,
    margin: 'auto',
    backgroundColor: 'red',
    alignItems: 'center',
    position: 'relative',
  },
  root: {
    position: 'absolute',
    maxWidth: 345,
    textAlign: 'center',
    },
  media: {
  height: 300,
  maxWidth: 340,
  // paddingTop: '56.25%', // 16:9
},
  expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
  expandOpen: {
  transform: 'rotate(180deg)',
},
  avatar: {
  backgroundColor: red[500],
},
  }));