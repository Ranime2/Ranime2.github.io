import '../../../assets/pages.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import Languages from "../../../assets/languages";
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SaveIcon from '@material-ui/icons/Save'; 
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FormControl from '@material-ui/core/FormControl';

import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

  const useStyles3 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
function handleClick(event) {
   
  }
  const useStyles2 = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '300px',
      },
    },
  }));
  

function Create() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    let isEnglish = !window.location.href.toString().includes("/fr") ? 0 : 1;
    return (
        <div className='home2'>
            <div className="whiteboard">

                <div className="content">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/create" onClick={handleClick}>
                            Archive 
                        </Link>
                        <Link color="inherit" href="/creation" onClick={handleClick}>
                            {Languages.NAV_CREATE2[isEnglish]}
                        </Link>
                    </Breadcrumbs>
                    <h1>{Languages.CREATE[isEnglish]} </h1>
                    <div>
                        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                            <Tab label={Languages.CREATE_P1[isEnglish]} />
                            <Tab label={Languages.CREATE_P2[isEnglish]}  />
                            <Tab label={Languages.CREATE_P3[isEnglish]} />
                            <Tab label={Languages.CREATE_P4[isEnglish]}  />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className="charPicture">
                            <img src={require("../../../assets/images/hero.jpg").default } alt="image not found"  />
                            </div>
                            <div className="inputs1">
                              
                                <div className="inp">
                                    <p>{Languages.CREATE_NAME[isEnglish]}</p>
                                    <Tooltip title={Languages.CREATE_NAME[isEnglish]}>
                                    <TextField id="input-with-icon-grid" label={Languages.CREATE_NAME[isEnglish]} placeholder={Languages.CREATE_NAME[isEnglish]} variant="outlined" />
                                </Tooltip>
                                </div>

                                <div className="inp">
                                    <p>{Languages.CREATE_TYPE[isEnglish]}</p>
                                    <Tooltip title={Languages.CREATE_TYPE[isEnglish]}>
                                    <TextField id="input-with-icon-grid" label={Languages.CREATE_TYPE[isEnglish]} placeholder={Languages.CREATE_TYPE[isEnglish]} variant="outlined"/>
                                    </Tooltip>
                                </div>

                                <div>
                                    <p>{Languages.CREATE_AGE[isEnglish]}</p>
                                    <Tooltip title={Languages.CREATE_AGE[isEnglish]}>
                                    <TextField id="input-with-icon-grid" label={Languages.CREATE_AGE[isEnglish]} placeholder={Languages.CREATE_AGE[isEnglish]} variant="outlined"/>
                                    </Tooltip>
                                </div>

                                <div className="inp">
                                    <FormControl className={classes3.formControl}>
                                    <label>{Languages.CREATE_SEXE[isEnglish]}</label>
                                    <Tooltip title={Languages.CREATE_SEXE[isEnglish]}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={Languages.CREATE_SEXE[isEnglish]}
                                            onChange={handleChange}
                                            displayEmpty
                                            placeholder={Languages.CREATE_SEXE[isEnglish]}
                                            className={classes3.selectEmpty}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                            <MenuItem value="" disabled>
                                            <em>{Languages.CREATE_SEXE[isEnglish]}</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Male</MenuItem>
                                            <MenuItem value={20}>Female</MenuItem>
                                            <MenuItem value={30}>Other</MenuItem>
                                        </Select>
                                    </Tooltip>
                                    </FormControl>
                                </div>

                                
                                <div className="inp">
                                    <p>{Languages.CREATE_TITLE[isEnglish]}</p>
                                    <Tooltip title={Languages.CREATE_TITLE[isEnglish]}>
                                    <TextField id="input-with-icon-grid" label={Languages.CREATE_TITLE[isEnglish]} placeholder={Languages.CREATE_TITLE[isEnglish]} variant="outlined"/>
                                    </Tooltip>
                                </div>
                            </div>
                        </TabPanel>
                    </div>

                   

                    <div className="buttons">
                        <Button variant="contained"><SaveIcon/>{Languages.SAVE[isEnglish]}</Button>
                        <Button variant="contained"><AssignmentTurnedInIcon/>{Languages.SAVE_CLOSE[isEnglish]}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;