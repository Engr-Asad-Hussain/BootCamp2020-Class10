import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 900,
        marginTop: 20,
        marginLeft: 60,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        /* textTransform: 'upperCase', */
        transition: 'transform .3s',
        "&:hover": {
            transform: 'scale(1.2)',
            cursor: 'text'
        }
    },
    title: {
        fontSize: '20px',
        fontWeight: '70px',
        color: '#9c27b0',
    },
    loading: {
        fontSize: '40px',
        color: '#c62828',
        marginLeft: '200px',
        marginTop: '50px',
    }
}));

function Global({ selectValue, countryList, countryIndex }) {
    // console.log(selectValue[0]);

    let [globalData, setGlobalData] = useState({});
    let [isFetching, setFetching] = useState(true);
    
    useEffect(() => {
        async function getData() {
            const apiResponse = await fetch('https://api.covid19api.com/summary');
            const dataFromAPI = await apiResponse.json();
            // console.log(dataFromAPI);
            gatherCountries(dataFromAPI, countryList);

            setGlobalData(dataFromAPI);
            setFetching(false);
        }
        getData();
    }, []);

    const gatherCountries = (dataFromAPI, countryList) => {
        var list = []
        for (var i = 0; i < 192; i++) {
            list.push(dataFromAPI.Countries[i].Country);
        }
        // console.log(list);
        countryList[1](list);
    }
    
    // console.log(globalData);
    const classes = useStyles();

    if (isFetching === true) {
        return (
            <div className={classes.loading}>
                <CircularProgress
                    color="secondary"
                    size={32}
                    thickness={2}
                /><span style={{ fontSize: 35 }}>   Loading Data ...</span>
            </div>
        )
    }
    else if (selectValue[0] === "Global") {
        return (
            <div className={classes.root}>
                <Typography variant="h3" style={{ color: '#8e24aa', fontWeight: 'bold' }}>
                    Global
                </Typography><br />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            className={classes.paper}
                            elevation={5}>
                            <Typography variant="h3" color="textSecondary" style={{ fontWeight: 500 }}>
                                {globalData && globalData.Global && globalData.Global.TotalConfirmed.toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" color="inherit">
                                Total Confirmed Cases
                                </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            className={classes.paper}
                            elevation={5}>
                            <Typography variant="h3" style={{ color: "darkGreen", fontWeight: 500 }}>
                                {globalData && globalData.Global && globalData.Global.TotalRecovered.toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: "darkGreen" }}>
                                Total Recovered
                                </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            className={classes.paper}
                            elevation={5}>
                            {/* We make sure that there must be a globalData and globalData.Global */}
                            <Typography variant="h3" color="error" style={{ fontWeight: 500 }}>
                                {globalData && globalData.Global && globalData.Global.TotalDeaths.toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" color="error">
                                Total Deaths
                                </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

    else {
        return (
            <div className={classes.root}>
                <Typography variant="h3" style={{ color: '#8e24aa', fontWeight: 'bold' }}>
                    {selectValue[0].toUpperCase()}
                </Typography><br />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            className={classes.paper}
                            elevation={5}>
                            <Typography variant="h3" color="textSecondary" style={{ fontWeight: 500 }}>
                                {globalData && globalData.Countries && globalData.Countries[countryIndex[0]].TotalConfirmed.toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" color="inherit">
                                Total Confirmed Cases
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            className={classes.paper}
                            elevation={5}>
                            <Typography variant="h3" style={{ color: "darkGreen", fontWeight: 500 }}>
                                {globalData && globalData.Countries && globalData.Countries[countryIndex[0]].TotalRecovered.toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: "darkGreen" }}>
                                Total Recovered
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            className={classes.paper}
                            elevation={5}>
                            {/* We make sure that there must be a globalData and globalData.Global */}
                            <Typography variant="h3" color="error" style={{ fontWeight: 500 }}>
                                {globalData && globalData.Countries && globalData.Countries[countryIndex[0]].TotalDeaths.toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" color="error">
                                Total Deaths
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Global;

/*
FontWeight in React:::
https://reactnative.dev/docs/text-style-props
*/