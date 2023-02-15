import React from 'react'
import '../Assets/css/karya.css'
// import SkillBars from './skillbar';
class Karya extends React.Component{
    render(){
        return(
            <div>
                <div className='karya-title'>
                 Recent Project
                </div>
                <div className='karya-subtitle'>
                I am a Frontend Engineer with a business mindset <br></br>from bringing the latest tech to launching successful startups!
                </div>
                <div className='karya-content'>
                <div className='karya-wrapper'>
                <div className='content-title'>All project</div>
                <div className='content-subtitle'>Explore more about All case studies and projects I have done! <a href="https://github.com/Dannaire" target="_blank" class="karya-button">Go to repository</a></div>
               
                </div>
                </div>
                    
                
            </div>
        )
    }
}
export default Karya;
