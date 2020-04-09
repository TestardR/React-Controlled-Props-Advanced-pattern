import React, { useState } from 'react';
import userCustomStyles from './usage.css';
import {
  MediumClap,
  ClapIcon,
  ClapCount,
  CountTotal,
} from './components/ControlledProps';

const INITIAL_STATE = {
  count: 0,
  countTotal: 2100,
  isClicked: false,
};

const MAXIMUM_CLAP_VALUE = 10;

function App() {
  const [state, setState] = useState(INITIAL_STATE);
  const handleClap = () => {
    console.log(state)
    setState(({ count, countTotal }) => ({
      count: Math.min(count + 1, MAXIMUM_CLAP_VALUE),
      countTotal: count < MAXIMUM_CLAP_VALUE ? countTotal + 1 : countTotal,
      isClick: true,
    }));
  };
  return (
    <div style={{ width: '100%' }}>
      <MediumClap
        values={state}
        onClap={handleClap}
        style={{ border: '1px solid orange' }}
      >
        <ClapIcon className={userCustomStyles.icon} />
        <ClapCount className={userCustomStyles.count} />
        <CountTotal className={userCustomStyles.total} />
      </MediumClap>
      <MediumClap
        values={state}
        onClap={handleClap}
        style={{ border: '1px solid orange' }}
      >
        <ClapIcon className={userCustomStyles.icon} />
        <ClapCount className={userCustomStyles.count} />
        <CountTotal className={userCustomStyles.total} />
      </MediumClap>
    </div>
  );
}

export default App;
