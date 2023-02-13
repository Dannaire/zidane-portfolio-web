import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import '../Assets/css/beranda.css'
import TentangSaya from './tentangsaya';
import Karya from './karya';
import tech from '../Assets/image/tech.png'
class Beranda extends React.Component{
    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <div className='beranda-container'>
                <div className='judul-wrapper'>
       
                <h2>Hi, my name is</h2>
                <h1>Muhammad Zidane Fajarianto <br></br>I am a Frontend Engineer</h1>
                <h3>1+ years of making the job done in the <span className='smktelkom'>SMK Telkom Malang!</span><br></br>I am a Frontend Engineer with a business mindset from bringing the latest tech to launching successful startups!</h3>
                </div>
                <div className='right-player'>
                <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets10.lottiefiles.com/packages/lf20_vnikrcia.json"
        style={{ height: '500px', width: '500px' }}
      ></Player>
      </div>
            </div>
            <div className='second-section'>
            <TentangSaya />
                
            </div>
            <div className='second-section'>
            <div className='left-player'>
            <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets10.lottiefiles.com/packages/lf20_wdhfjhyc.json"
        style={{ height: '600px', width: '600px' }}
      ></Player>
      </div>
      <div className='right-content'>
        <div className='second-wrapper'>
       
                <h2>My Tech Stack</h2>
                <h1> Hello This Is My Technology <br></br>What i Used To Develop My Project</h1>
                <div className='tech-wrapper'><img src={tech}/></div>
                
                </div>
      </div>
            
            </div>
           
            <Karya/>
            
            </div>
        )
    }
}
export default Beranda;
