

import React from 'react';
import Utama from './components/utama'
import'./Assets/css/style.css';

import { Link } from "react-router-dom";


class App extends React.Component{

    render(){
        return(
            <div> 
            <div className='nav-wrapper'>
              <div className='nav-logo'>
                <h2>Zidane</h2>
              </div>
              <ul>
               <li><Link to="/">Beranda</Link></li> 
               <li><Link to="/tentangsaya">Tentang saya</Link></li> 
               <li><Link to="/karya">Karya</Link></li> 
               <li> <Link to="/kontak">Kontak</Link></li> 
                </ul>
              
                </div>
                <p><Utama /></p>
            </div>
        );
    }
}
export default App;