import React from 'react';

import Main from './sections/Main';
// import Omnie from './sections/Omnie';
import Oferta from './sections/Oferta';
import Kontakt from './sections/Kontakt'

const Home =()=>
  (
    <div>
      <Main />
      {/* <Omnie /> */}
      <Oferta />
      <Kontakt />
    </div>
   )

export default Home