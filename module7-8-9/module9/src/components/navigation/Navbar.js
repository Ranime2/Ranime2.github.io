import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import '../../assets/Nav.css';
import { IconContext } from 'react-icons';
import LanguageSwitch from "./languageSwitch"
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar() {
  let image = require("../../assets/images/icon.png");

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div>
          <nav className='nav-menu' >
            <div>
              <ul className='nav-menu-items' >
                <img src={image.default } alt="image not found"  /><h1 style={{color: "#AB0000"}}>Fun-Da-Mentals</h1>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <NavLink exact activeClassName="active" to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })}

                <li className="Profile">

                </li>
              </ul>
            </div>
            <div className="profile">
                <Tooltip title="Profile" aria-label="Profile">
                    <Fab color="secondary" >
                      <AccountCircleIcon />
                    </Fab>
                </Tooltip>
                <p>Peache</p>
            </div>

          </nav>

         

        </div>
        


      </IconContext.Provider>
    </>
  );
}


export default Navbar;