import React from 'react';
import './stylesheets/main.scss';

import Face from './components/Face';

const App = () => (
  <div>
    <Face circle/>
    <h1>Hong Min</h1>
    <h2>Software Engineer</h2>
    <h2>
      <span role="img" aria-label="I love"> 🖤 </span>
      <span> code, design, art. </span>
    </h2>
  </div>  
);

export default App;
