import { useState } from 'react';

import Couter from '../../components/Couter';
import CouterClass from '../../components/CouterClass';

const TutorialPage = () => {
  const [value, setValue] = useState('супер текст!');

  console.log(value);

  return (
    <div className="">
      <h1>hi, react i by!</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <Couter />
      {/* <CouterClass /> */}
    </div>
  );
};

export default TutorialPage;
