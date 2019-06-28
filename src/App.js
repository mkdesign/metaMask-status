import React from 'react';
import { useWeb3 } from './UseWeb3';
import Blockies from 'react-blockies';
import { makeStyles } from '@material-ui/core/styles';
import  Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    textTransform : 'initial'
  },
  card: {
    display: 'flex',
    marginTop : 15,
    alignItems : 'center',
    flexDirection : 'row',
    paddingLeft : 15
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  icon : {
    fontSize: 16,
    marginRight : 5,
    top : 5,
    position : 'relative'
  },
  finger : {
    marginRight : 0,
    fontSize : 20,
  }
}));


function MetamaskStatus() {
  const classes = useStyles();
  let w3 = useWeb3();
  let {status} = w3;
    console.log(w3); // look in your JS console

    let response = ''
    
    if(status === "NO_WEB3") {

      response  = <Card className={classes.card}>
        
        <CardContent className={classes.content}>
          
          <Typography variant="subtitle1" color="textSecondary">
          
            MetaMask status : <BuildIcon className={classes.icon} /> {w3.status}
          </Typography>
        </CardContent> 
    </Card>
    }
    else if (status === "READY"){
      response  = <Card className={classes.card}>
        <div><Blockies seed='randstring' size={10} scale={10} /></div>
          <CardContent className={classes.content}>
            
            <div>
              <Typography variant="h5">
                Ready To Go! 
              </Typography>
              <Typography variant="body2" color="textSecondary">
               Address : {w3.account.address} <br />
                MetaMask status : {w3.status} <br />
                Network Name : {w3.account.networkName} 
              </Typography>
            </div>
          </CardContent> 
        </Card>
      }

    else if (status === "LOCKED" || status === "NOT_ENABLED"){

      response  = <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            MetaMask status :<FingerprintIcon className={`${classes.icon} ${classes.finger}`} />{w3.status}
          </Typography>
          <Button onClick={(e)=>{e.preventDefault(); w3.enable()}}  variant="contained" href="#contained-buttons" className={classes.button}>Enable MetaMask</Button>
        </CardContent> 
      </Card>
     
    }

    return(<Container>
      {response}
    </Container>)  
}

function App() {
    return <MetamaskStatus />;
}

export default App;