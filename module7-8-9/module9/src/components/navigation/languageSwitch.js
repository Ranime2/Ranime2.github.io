
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Languages from "../../assets/languages"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownItem from "react-bootstrap/DropdownItem"
import DropdownToggle from "react-bootstrap/DropdownToggle"
import DropdownButton from "react-bootstrap/DropdownButton"

function LanguageSwitch(props){
    const [,setState] = useState();
    let isEnglish= !window.location.href.toString().includes("/fr");;
    console.log("HEY " + window.location.href.toString())


    const history = useHistory();
  
    const handleRoute = () =>{ 
        let engPath = window.location.pathname.toString().replace("/fr", "")
        let frPath = engPath+"/fr"
        history.push(!isEnglish? engPath:frPath);
        window.location.reload(false);
    }
    return (
      
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {isEnglish? "English":"Francais"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item  onClick={handleRoute}>{isEnglish? "Francais":"English"}</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
       
    );
}

export default LanguageSwitch;