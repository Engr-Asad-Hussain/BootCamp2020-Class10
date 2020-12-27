import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 160,
        position: 'absolute',
        right: '5%',
        marginTop: 25,
    },
}));


export default function SimpleSelect({selectValue, countryList, countryIndex}) {
    // console.log(countryList[0]);
    const classes = useStyles();

    const handleChange = (event) => {
        selectValue[1](event.target.value);
        // console.log(selectValue[0]);
        // console.log(event.target.value); 
        for (var i=0; i<countryList[0].length; i++)  {
            if ( countryList[0][i] === event.target.value ) {
                countryIndex[1](i);
                break;
                // console.log(countryList[0][i]);
                // console.log(i);
            }
        }
    }
    // console.log(countryList)

    return (
        <div className={classes.position}>
            <FormControl className={classes.formControl} color="primary">
                <InputLabel htmlFor="countryName">Select Country</InputLabel>
                <NativeSelect
                    className={classes.MuiInputBaseInput}
                    value={selectValue[0]}
                    onChange={handleChange}
                    id='countryName'
                >
                    <option value="Global">Global</option>
                    {countryList[0].map( (object, index)=>{
                        return (
                            <option value={object} key={index}>
                                {countryList[0][index]}
                            </option>
                        );
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
