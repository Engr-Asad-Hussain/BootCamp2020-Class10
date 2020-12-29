import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 900,
        marginTop: 50,
        marginLeft: 120,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        /* textTransform: 'upperCase', */
    },
    title: {
        fontSize: '20px',
        fontWeight: '70px',
        color: '#9c27b0',
    }
}));

function Global() {
    let [globalData, setGlobalData] = useState({ });

    useEffect( ()=>{
        async function getData() {
            const api = await fetch('https://api.covid19api.com/summary');
            const data = await api.json();
            setGlobalData(data.Global);
        }
        getData();
    }, []);

    // console.log(globalData);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 style={{color: '#8e24aa'}}>Globally</h1>
            <Grid container spacing={3}>
                {Object.entries(globalData).map( (obj, ind)=>{
                    return(
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <span className={classes.title}>{obj[0].replace(/([a-z])([A-Z])/, '$1 $2')}</span><br />
                                    <h3>{obj[1]}</h3>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
export default Global;

/*
Grid:::
https://material-ui.com/components/grid/

[x] "xs" can be 3, 6, 12. It changes the layout when using on small devices.
[x] All the "sm" sum must be equal to 12.
*/

/*
elevation={3} is a paper property that increases the dropdown shadow
*/

/*
Object.keys( {} ) => It converts the object into an array having all the keys at separate indexes. Example: ["NewConfirmed", "TotalConfirmed", "NewDeaths", "TotalDeaths", "NewRecovered", "TotalRecovered"]
Object.values( globalData ) => It converts the object into an array having all the values at separate indexes. For Example: [692917, 78692866, 13607, 1730560, 324529, 44384291]
Object.entries( globalData ) => Convert it into an array having inside an array of objects. For Example: [["NewConfirmed", 692917], ["TotalConfirmed", 78692866], ["NewDeaths", 13607], ["TotalDeaths", 1730560], ["NewRecovered", 324529]]
Here globalData is an object.
*/

/*
Object.keys(globalData).map( (obj, ind)
1. globalData is an object
2. so we first convert object into an array having only keys
3. then we can apply .map() property of an array.
*/


/*
replace(/([a-z])([A-Z])/, '$1 $2')
https://forum.freecodecamp.org/t/spinal-tap-case-operator/56148
*/