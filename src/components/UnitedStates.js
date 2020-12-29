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

function UnitedStates() {
    let [countryData, setCountryData] = useState({});

    useEffect(() => {
        async function getData() {
            const api = await fetch('https://api.covid19api.com/summary');
            const data = await api.json();
            // console.log(data.Countries);
            for (var i = 0; i < data.Countries.length; i++) {
                if (data.Countries[i].Country.toUpperCase() === "United States of America".toUpperCase()) {
                    // console.log(i);
                    break;
                }
            }
            delete data.Countries[i].Country;
            delete data.Countries[i].CountryCode;
            delete data.Countries[i].Date;
            delete data.Countries[i].Premium;
            delete data.Countries[i].Slug;

            // console.log(data.Countries[i])
            setCountryData(data.Countries[i]);
        }
        getData();
    }, []);

    console.log(countryData);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 style={{color: '#8e24aa'}}>Pakistan</h1>
            <Grid container spacing={3}>
                {Object.entries(countryData).map( (obj, ind)=> {
                    return(
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                    <span className={classes.title}>{obj[0].replace(/([a-z])([A-Z])/, '$1 $2')}</span><br/>
                                    <h3>{obj[1]}</h3>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div >
    );
}
export default UnitedStates;