import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        marginRight: 40,
        float: 'right',
    },
    legend: {
        fontSize: '25px',
        color: '#3f51b5',
        marginBottom: 12,
    }
}));


function RadioButtons({radioValue}) {
    const classes = useStyles();
    // console.log(radioValue);

    const handleChange = (event) => {
        radioValue[1](event.target.value);
        // console.log(radioValue[0]);
    };

    return (
        <FormControl className={classes.root} component="fieldset">
            <FormLabel className={classes.legend}>Countries</FormLabel>
            <RadioGroup value={radioValue[0]} onChange={handleChange}>
                <FormControlLabel value="global" control={<Radio />} label="Global" />
                <FormControlLabel value="pakistan" control={<Radio />} label="Pakistan" />
                <FormControlLabel value="unitedstates" control={<Radio />} label="United States" />
            </RadioGroup>
        </FormControl>
    );
}
export default RadioButtons;