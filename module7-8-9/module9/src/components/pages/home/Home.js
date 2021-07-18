
import '../../../assets/pages.css';
import React from 'react';

import Button from "react-bootstrap/Button";
import Languages from "../../../assets/languages";
function Home() {
  let isEnglish = !window.location.href.toString().includes("/fr") ? 0 : 1;

  return (
    <div className='home'>
      <div className="whiteboard">
        <div className="content">
          <h1>{Languages.HOME_WELCOME[isEnglish]}</h1>

          <div className="sectionA">
            <h2>{Languages.HOME_NEWS[isEnglish]}</h2>
              <div>
              <Button className="characterCard">
                <img src={require("../../../assets/images/antihero.jpg").default } alt="image not found"  />
                <h4>{Languages.HOME_NEW1[isEnglish]}</h4>
                <h5>Ex: Deadpool</h5>
                </Button>
                <Button className="characterCard">
                    <img src={require("../../../assets/images/ruler.jpg").default } alt="image not found"  />
                    <h4>{Languages.HOME_NEW2[isEnglish]}</h4>
                    <h5>Ex: King Arthur</h5>
                </Button>
                <Button className="characterCard">
                    <img src={require("../../../assets/images/lover.jpg").default } alt="image not found"  />
                    <h4>{Languages.HOME_NEW3[isEnglish]}</h4>
                    <h5>Ex: Circé</h5>
                </Button>
    
              </div>
          </div>
        
  
      
        </div>
      </div>
     
    </div>
  );
}

export default Home;