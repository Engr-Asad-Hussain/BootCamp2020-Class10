import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';
import '../App.css';

function Global({selectValue}) {
    let [values, setValues] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const apiResponse = await fetch('https://corona.lmao.ninja/v2/historical?lastdays=365');
            const dataFromAPI = await apiResponse.json();
            gatherData(dataFromAPI);
            // console.log(dataFromAPI[0].timeline);
            // console.log(selectValue[0]);
        }
        getData();
    }, []);

    function gatherData(dataFromAPI) {
        // console.log(dataFromAPI[0].timeline.cases)
        for (var j=0; j<dataFromAPI.length; j++) {
            if (selectValue[0] === "Global") {
                j = 0;
                break;
            }
            else if(dataFromAPI[j].country === selectValue[0]) {
                break;
            }
        }
        var days = Object.entries(dataFromAPI[j].timeline.cases);
        // console.log(days);  // It shows [["day1", "cases"], ["day2", "cases"]...] in last 30 days
        var date;
        var december = [];
        var november = [];
        var october = [];
        var september = [];
        var august = [];
        var july = [];
        var june = [];
        var may = [];
        var april = [];
        var march = [];
        var febraury = [];
        var january = [];

        var decSumValue = 0;
        var novSumValue = 0;
        var octSumValue = 0;
        var sepSumValue = 0;
        var augSumValue = 0;
        var julSumValue = 0;
        var junSumValue = 0;
        var maySumValue = 0;
        var aprSumValue = 0;
        var marSumValue = 0;
        var febSumValue = 0;
        var janSumValue = 0;

        for (var i=0; i<days.length; i++) {
            date = new Date(days[i][0]);        // [rows][columns]

            if ( date.getMonth() === 11 && date.getFullYear() === 2020) {
                // console.log("December");
                december.push(days[i]);
                decSumValue = decSumValue + days[i][1]
            }
            else if (date.getMonth() === 10 && date.getFullYear() === 2020 ) {
                // console.log("November");
                november.push(days[i]);
                novSumValue = novSumValue + days[i][1];
            }
            else if (date.getMonth() === 9 && date.getFullYear() === 2020 ) {
                // console.log("October");
                october.push(days[i]);
                octSumValue = octSumValue + days[i][1];
            }
            else if (date.getMonth() === 8 && date.getFullYear() === 2020 ) {
                // console.log("September");
                september.push(days[i]);
                sepSumValue = sepSumValue + days[i][1];
            }
            else if (date.getMonth() === 7 && date.getFullYear() === 2020 ) {
                // console.log("August");
                august.push(days[i]);
                augSumValue = augSumValue + days[i][1];
            }
            else if (date.getMonth() === 6 && date.getFullYear() === 2020 ) {
                // console.log("Jul");
                july.push(days[i]);
                julSumValue = julSumValue + days[i][1];
            }
            else if (date.getMonth() === 5 && date.getFullYear() === 2020 ) {
                // console.log("June");
                june.push(days[i]);
                junSumValue = junSumValue + days[i][1];
            }
            else if (date.getMonth() === 4 && date.getFullYear() === 2020 ) {
                // console.log("May");
                may.push(days[i]);
                maySumValue = maySumValue + days[i][1];
            }
            else if (date.getMonth() === 3 && date.getFullYear() === 2020 ) {
                // console.log("April");
                april.push(days[i]);
                aprSumValue = aprSumValue + days[i][1];
            }
            else if (date.getMonth() === 2 && date.getFullYear() === 2020 ) {
                // console.log("March");
                march.push(days[i]);
                marSumValue = marSumValue + days[i][1];
            }
            else if (date.getMonth() === 1 && date.getFullYear() === 2020 ) {
                // console.log("Febraury");
                febraury.push(days[i]);
                febSumValue = febSumValue + days[i][1];
            }
            else if (date.getMonth() === 0 && date.getFullYear() === 2020 ) {
                // console.log("January");
                january.push(days[i]);
                janSumValue = janSumValue + days[i][1];
            }
            else {}
        }
        let array = [];
        // console.log(december);
        array.push(parseInt(decSumValue/december.length));
        // console.log(november);
        array.push(parseInt(novSumValue/november.length));
        // console.log(october);
        array.push(parseInt(octSumValue/october.length));
        // console.log(september);
        array.push(parseInt(sepSumValue/september.length));
        // console.log(august);
        array.push(parseInt(augSumValue/august.length));
        // console.log(july);
        array.push(parseInt(julSumValue/july.length));
        // console.log(june);
        array.push(parseInt(junSumValue/june.length));
        // console.log(may);
        array.push(parseInt(maySumValue/may.length));
        // console.log(april);
        array.push(parseInt(aprSumValue/april.length));
        // console.log(march);
        array.push(parseInt(marSumValue/march.length));
        // console.log(febraury);
        array.push(parseInt(febSumValue/febraury.length));
        // console.log(january);
        array.push(parseInt(janSumValue/january.length));
        // console.log(array);
        setValues(array.reverse()); // .reverse() to put data from jan to dec.
    }

    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Cases',
                fill: false,
                lineTension: 0.9,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: values,
            }
        ]
    };
    
    if (selectValue[0] === "Global") {
        return (
            <div></div>
        )
    }

    return (
        <div className="chart-container">
            <Typography variant="h5" style={{ color: '#8e24aa', marginTop: '20px' }}>
                    Monthly Average Confirmed Cases in 2020
                </Typography>
            {/* In order for Chart.js to obey the custom size you need to set maintainAspectRatio to false */}
            <Line 
                data={data}
                width={300}
                height={200}
                options={{ 
                    maintainAspectRatio: false,
                    responsive: true, 
                }}
            />
        </div>
    );
}
export default Global;

/*
React Number Format:::
https://www.npmjs.com/package/react-number-format
*/

/*
To add commas at thousand places,
.toLocaleString()
*/

/*
Line Bar:::
https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/components/line.js
*/

/*
// this is our initial value i.e. the starting point
const initialValue = 0;

// numbers array
const numbers = [5, 10, 15];

// reducer method that takes in the accumulator and next item
const reducer = (accumulator, item) => {
  return accumulator + item;
};

// we give the reduce method our reducer function
//  and our initial value
const total = numbers.reduce(reducer, initialValue)

https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
*/