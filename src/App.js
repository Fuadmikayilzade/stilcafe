// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Luxbar from './Navbar/Luxbar';
// import Menu from './components/Menu';
// import Campaigns from './components/Campaigns';
// import Contact from './components/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className='background'>
//       <Luxbar />
//       <Home />
//       <About />
//       <Menu />
//       <Campaigns />
//       <Contact />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Luxbar from './Navbar/Luxbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Campaigns from './components/Campaigns';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Luxbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;





// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Luxbar from './Navbar/Luxbar';
// import Menu from './components/Menu';
// import Campaigns from './components/Campaigns';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Luxbar />
//         <Route exact path="/" component={Home} />
//         <Route path="/About" component={About} />
//         <Route path="/Menu" component={Menu} />
//         <Route path="/Campaigns" component={Campaigns} />
//         <Route path="/Contact" component={Contact} />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Luxbar from './Navbar/Luxbar';

// function App() {
//   return (
//     <div>
//       <Luxbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



