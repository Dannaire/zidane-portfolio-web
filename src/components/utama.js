

import { Route,Routes} from 'react-router-dom'
import React from 'react';
import Beranda from './beranda';
import Karya from './karya';
import Kontak from './kontak';
import TentangSaya from './tentangsaya';
import Gallery from './Gallery';
const Utama= () =>{
  return (
<>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Routes>
        
          <Route exact path="/" element={<Beranda/>}/>
          <Route path="/Karya" element={<Karya/>}/>
          <Route path="/Kontak" element={<Kontak/>}/>
          <Route path="/Tentangsaya" element={<TentangSaya/>}/>
          <Route path="/gallery" component={Gallery} />

      </Routes>
      
    </>
  );
}
export default Utama;