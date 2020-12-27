import React from 'react';
import Global from '../components/Global';
import Pakistan from '../components/Pakistan';
import UnitedStates from '../components/UnitedStates';

function DisplayPanel({radioValue}) {
    if (radioValue[0] === 'global')
        return <Global />
    else if (radioValue[0] === 'pakistan')
        return <Pakistan />
    else   
        return <UnitedStates />
}

export default DisplayPanel;