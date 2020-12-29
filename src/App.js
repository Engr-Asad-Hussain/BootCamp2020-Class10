import SearchAppBar from './components/SearchAppBar';
import RadioButtons from './components/RadioButtons';
import DisplayPanel from './components/DisplayPanel';
import { useState } from 'react';

function App() {
  const radioValue = useState('global');
  console.log(radioValue[0]);
  return (
    <div>
      <SearchAppBar />
      <RadioButtons radioValue={radioValue}/>
      <DisplayPanel radioValue={radioValue}/>
    </div>
  );
}

export default App;
