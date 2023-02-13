import React from 'react'
import '../Assets/css/tentangsaya.css'
import About from '../Assets/image/aboutmefoto.JPG'
import { Link } from "react-router-dom";
class TentangSaya extends React.Component{
    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
                <div className='tentang-saya-container'>
                    <div className='left-column'>
                        <div className='tentang-saya-photo-card'>
                             <img src={About} alt="Your photo"/>
                                {/* <h3>Your Name</h3>
                                <p>Your job title</p> */}
                        </div>
                        <ul className="sosmed-wrapper">
        <a className="hover-target" href="https://open.spotify.com/user/31ekar7nxdchnqxdkgophz45b3hq" target='_blank'>
            <li className="icon Spotify">
                <span className="tooltip">Spotify</span>
                <span><i className="fa-brands fa-spotify" /></span>
            </li>
        </a>
        <a className="hover-target" href="https://www.linkedin.com/in/muhammad-zidane-fajarianto-317393245/" target='_blank'>
            <li className="icon linkedin">
                <span className="tooltip">LinkedIn</span>
                <span><i className="fa-brands fa-linkedin-in" /></span>
         
             </li>
        </a>
        <a className="hover-target" href="https://www.instagram.com/dann_moriarty/" target='_blank'>
            <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span><i className="fab fa-instagram" /></span>
            </li>
        </a>
        <a className="hover-target" href="https://github.com/Dannaire/Tugas-TEFA-Frontend-1" target='_blank'>
            <li className="icon github">
                <span className="tooltip">Github</span>
             <span><i className="fab fa-github" /></span>
          
             </li>
        </a>
   
      </ul>
                    </div>
            <div className='right-column'>
                <div className='about-me'>
                <h2>About Me</h2>
             <p>My name is Muhammad Zidane Fajarianto I'm a Front End Engineer based in Malang, East Java, Indonesia . 
                I describe myself as a passionate developer who loves coding, open source, and the web platform.</p>

                <a  class="about-me-button"> 
               <h5><Link to="/karya">Project</Link></h5></a>
            </div>
            </div>
            </div>

            </div>
        )
    }
}
export default TentangSaya;
