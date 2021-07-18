
import '../../../assets/pages.css';

import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "react-bootstrap/Button";
import Languages from "../../../assets/languages";

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function Archives() {
  let isEnglish = !window.location.href.toString().includes("/fr") ? 0 : 1;
  const history = useHistory();
  
    const handleRoute = () =>{ 
        let engPath = "/creation"
        let frPath = "/creation/fr"
        history.push(!isEnglish? engPath:frPath);
        window.location.reload(false);
    }
    
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (

    <div className='archives'>

        <div className="whiteboard">
            <div className="content">
                <h1>{Languages.ARCH[isEnglish]}</h1>
            <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                <Tab label={Languages.ARCH_BREAKOUT[isEnglish]} />
                <Tab label={Languages.ARCH_OC[isEnglish]}  />

            </Tabs>
            <TabPanel value={value} index={0}>
                <div className="characterCard">
                <div className="ccdelete">
                    <Tooltip title="Delete">
                        <IconButton >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <img src={require("../../../assets/images/jack.jpg").default } alt="image not found"  />
                <h4>Jack Sparow</h4>


                </div>
                <div className="characterCard">
                <div className="ccdelete">
                    <Tooltip title="Delete">
                        <IconButton >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                    <img src={require("../../../assets/images/iron.jpg").default } alt="image not found"  />
                    <h4>IronMan</h4>
                   
                </div>
                <div className="characterCard">
                <div className="ccdelete">
                    <Tooltip title="Delete">
                        <IconButton >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                    <img src={require("../../../assets/images/spider.jpg").default } alt="image not found"  />
                    <h4>Spider-Man</h4>
    
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Button className="characterCard">
                <div className="ccdelete">
                    <Tooltip title="Delete">
                        <IconButton >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                <img src={require("../../../assets/images/antihero.jpg").default } alt="image not found"  />
                <h4>Jordan Amiral</h4>

                </Button>
            

               
                    <Tooltip title="Add" aria-label="add"  onClick={handleRoute}>
                        <Fab color="primary" className={classes.absolute}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
    
               
            </TabPanel>
                

            </div>
        </div>
    </div>
  );
}

export default Archives;