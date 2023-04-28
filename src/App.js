

import React from 'react';
import Utama from './components/utama'
import'./Assets/css/style.css';

import { Link } from "react-router-dom";


class App extends React.Component{

    render(){
        return(
            <div> 
                <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div className='nav-wrapper'>
              <div className='nav-logo'>
                <h2>Zidane</h2>
              </div>
              <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
              <ul>
               <li><Link to="/">Beranda</Link></li> 
               <li><Link to="/tentangsaya">Tentang saya</Link></li> 
               <li><Link to="/karya">Karya</Link></li> 
               <li> <Link to="/kontak">Kontak</Link></li> 
               <li> <Link to="/gallery">Gallery</Link></li> 
                </ul>
              
                </div>
                <p><Utama /></p>
            </div>
        );
    }
}
export default App;