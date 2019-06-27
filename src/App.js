import React from 'react';
import { useWeb3 } from './UseWeb3';
 
function MetamaskStatus() {
    let w3 = useWeb3();
    let {status} = w3;
    console.log(w3); // look in your JS console

    let response = ''

    if(status === "NO_WEB3") {

      response = <div>
          <pre> status = {w3.status}</pre>;
        </div>;
    }
    else if (status === "READY"){
      response = <div>
        <p>READY TO GO!</p>
      </div>
    }

    if (status === "LOCKED" || status === "NOT_ENABLED"){
      response = <div>
          <p>It seems your metamask is not enabaled! </p>
          <button onClick={()=>w3.enable()}></button>
        </div> 
    }

    if (status === ""){
      
    }
    else {

    }
    
    
}

function App() {
    return <MetamaskStatus />;
}

export default App;