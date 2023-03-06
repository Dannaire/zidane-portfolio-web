import React from 'react';
import '../Assets/css/card.css'
import sneaky from '../Assets/image/sneaky.jpeg'
import yoel from '../Assets/image/yoel.jpeg'
import calc from '../Assets/image/calculatorweb.jpeg'
import next from '../Assets/image/nextjs-icon.png'
import { Link } from 'react-router-dom';

function Card() {
  return (
<div> 
    <div className='card-container'>
  
        <div className="card-1">
        <Link to="https://tefa-next-js.vercel.app/" target='_blank'> <h1 className="title">DannSneaky</h1></Link>
          {/* <img src={next} /></h1> */}
        <div className="imgCont"> <img src={sneaky} />
            <div className="caption">Next JS | CSS</div>
            <div className="desc"> 
              <p>Welcome to our online shoe store, where you can discover the latest trends in footwear and elevate your fashion game. our e-commerce website makes shopping for shoes a breeze.</p>
            </div>
          </div>
        </div>
        
        <div className="card-1">
        <Link to="https://github.com/Dannaire/YoelStore" target='_blank'><h1 className="title">YoelStore</h1></Link>
          {/* <img src="http://www.ranjotsingh.com/git.png" /></h1> */}
          <div className="imgCont"> <img src={yoel} />
            <div className="caption">PHP | CSS</div>
            <div className="desc"> 
            <p>Welcome to our online gadged store, where you can discover the latest trends in gadged wear and elevate your fashion game. our e-commerce website makes shopping for gadget a breeze.</p>
            
            </div>
          </div>
        </div>
        <div className="card-1">
        <Link to="https://kelompok5-react.vercel.app/" target='_blank'><h1 className="title">Calculator</h1></Link>
          {/* <img src="http://www.ranjotsingh.com/git.png" /></h1> */}
          <div className="imgCont"> <img src={calc} />
            <div className="caption">React Js | CSS3</div>
            <div className="desc"> 
            <p>Welcome to our online calculator app, where you can discover the latest trends in calculator app and elevate your calculator game. our calculator website makes demonstration for calculate an math.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Card;