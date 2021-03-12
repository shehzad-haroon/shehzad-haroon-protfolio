import React from 'react';
import Header from './Components/Header'
import NewNav from './Components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './Components/About';
import Service from './Components/Service';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';



const App = () => (
  <div>
    <Router>
    <NewNav/>
    <div >
      <Route  exact path="/" component={Header} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Services" component={Service} />
      <Route exact path="/Projects" component={Project} />
      <Route exact path="/Skills" component={Skill} />
      <Route exact path="/Contacts" component={Contact} />
      </div>
      </Router>
  </div>
  
);

export default App;



// import React from 'react';
// import useDarkMode from 'use-dark-mode';

// import Toggle from './Toggle';

// const App = () => {
//   const darkMode = useDarkMode(false);

//   return (
//     <div>
//       <button type="button" onClick={darkMode.disable}>
//         ☀
//       </button>
//       <button checked={darkMode.value} onChange={darkMode.toggle} />
//       <button type="button" onClick={darkMode.enable}>
//         ☾
//       </button>
//     </div>
//   );
// };

// export default App;