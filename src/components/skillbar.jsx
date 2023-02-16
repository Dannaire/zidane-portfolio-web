import React from 'react';
import SkillBar from 'react-skillbars';
import '../Assets/css/skillbar.css'

import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SkillBars() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='container-skill'>
      <div className='left-skill'>
      <h2>Hello Visitors</h2>
                <h1>This Is What I Learned In My 1+ Year Journey Of Code</h1>
                <h3>1+ years of making the job done in my journey <br></br>I am a Frontend Engineer with a business mindset from bringing the latest tech to launching successful startups!</h3>
      </div>
     <div className='right-skill'>
    <div className='skillbar-container'>
    <h2>Skill</h2>
    <div className='skillbar-wrapper'>
      <h3>HTML 5 <ProgressBar animated now={95} /> </h3>
      <h3>CSS 3<ProgressBar animated now={87} /></h3>
      <h3>JavaScript<ProgressBar animated now={58} /></h3>
      <h3>PHP<ProgressBar animated now={70} /></h3>
  </div>
  </div>
  </div>
  </div>
  </div>
);
}

export default SkillBars;

