import SearchAppBar from './components/SearchAppBar';
import SimpleSelect from './components/SimpleSelect';
import Global from './components/Global';
import GlobalMap from './components/GlobalMap';
import { useState } from 'react';

function App() {
  const selectValue = useState('Global');
  const countryList = useState([]);
  const countryIndex = useState(0);
  // console.log(countryList[0]);
  // console.log(selectValue[0]);
  // console.log(countryIndex[0]);
  return (
    <div>
      <SearchAppBar />
      <SimpleSelect 
        selectValue={selectValue} 
        countryList={countryList}
        countryIndex={countryIndex}  
      />
      <Global 
        selectValue={selectValue} 
        countryList={countryList}
        countryIndex={countryIndex}
      />
      <GlobalMap 
        selectValue={selectValue}
      />
    </div>
  );
}

export default App;
