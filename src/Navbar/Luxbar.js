// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Luxbar.css'


// function Luxbar() {
//   return (
//     <div>
//          <header id="luxbar" className="luxbar-fixed">
//         <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
//         <div className="luxbar-menu luxbar-menu-right luxbar-menu-light">
//           <ul className="luxbar-navigation">
//             <li className="luxbar-header">
//               <a href="#" className="luxbar-brand" style={{ fontFamily: 'cursive', fontSize: '30px', fontWeight: 'bolder', marginLeft: '3%', color: 'rgb(255, 149, 0)' }}>STİL</a>
//               <label className="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
//             </li>
//             <li className="luxbar-item"><a href="#">Ana səhifə</a></li>
//             <li className="luxbar-item"><a href="#">Haqqımızda</a></li>
//             <li className="luxbar-item"><a href="#">Menyular</a></li>
//             <li className="luxbar-item"><a href="#">Kampaniyalar</a></li>
//             <li className="luxbar-item"><a href="#">Əlaqə</a></li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Luxbar



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Luxbar.css'

// function Luxbar() {
//   return (
//     <div>
//       <header id="luxbar" className="luxbar-fixed">
//         <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
//         <div className="luxbar-menu luxbar-menu-right luxbar-menu-light">
//           <ul className="luxbar-navigation">
//             <li className="luxbar-header">
//               <Link to="/" className="luxbar-brand" style={{ fontFamily: 'cursive', fontSize: '30px', fontWeight: 'bolder', marginLeft: '3%', color: 'rgb(255, 149, 0)' }}>STİL</Link>
//               <label className="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
//             </li>
//             <li className="luxbar-item"><Link to="/">Ana səhifə</Link></li>
//             <li className="luxbar-item"><Link to="/about">Haqqımızda</Link></li>
//             <li className="luxbar-item"><Link to="/menu">Menyular</Link></li>
//             <li className="luxbar-item"><Link to="/campaigns">Kampaniyalar</Link></li>
//             <li className="luxbar-item"><Link to="/contact">Əlaqə</Link></li>
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Luxbar;






import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './Luxbar.css'; // Stil faylınızı daxil edin
import { Link } from 'react-router-dom';
import logo from './logo.jpeg'

function Luxbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>

     <header id="luxbar" className="luxbar-fixed">
        <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
        <div className="luxbar-menu luxbar-menu-right luxbar-menu-light">
          <ul className="luxbar-navigation">
            <li className="luxbar-header">
              <Link to="/" className="luxbar-brand" ><img src={logo} alt="" style={{  marginLeft: '3%', width: '75px', height: '50px'}} /></Link>
              <label className="luxbar-hamburger luxbar-hamburger-doublespin" id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
            </li>
            <li className="luxbar-item"><Link to="/">Ana səhifə</Link></li>
            <li className="luxbar-item"><Link to="/about">Haqqımızda</Link></li>
            <li className="luxbar-item"><Link to="/menu">Menyular</Link></li>
            <li className="luxbar-item"><Link to="/campaigns">Kampaniyalar</Link></li>
            <li className="luxbar-item"><Link to="/contact">Əlaqə</Link></li>
          </ul>
        </div>
      </header>

      

    <div className='luxbar1'>
      <div className='headericon'>
      <Link to="/"><header className='header-text1'><img src={logo} alt="" style={{  marginLeft: '3%', width: '75px', height: '50px'}}/></header></Link>
        {!isMenuOpen ? (
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={toggleMenu}
          />
        ) : (
          <FontAwesomeIcon
            icon={faX}
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={toggleMenu}
          />
        )}
      </div>
      {isMenuOpen && (
        <ul className='luxbar-ul1'>
          <Link to="/"><li className='link' onClick={closeMenu}>Ana Səhifə</li></Link>
          <Link to="/about"><li className='link' onClick={closeMenu}>Haqqında</li></Link>
          <Link to="/menu"><li className='link' onClick={closeMenu}>Menyular</li></Link>
          <Link to="/campaigns"><li className='link' onClick={closeMenu}>Kampaniyalar</li></Link>
          <Link to="/contact"><li className='link' onClick={closeMenu}>Əlaqə</li></Link>
        </ul>
      )}
    </div>
    </div>
  );
}

export default Luxbar;


