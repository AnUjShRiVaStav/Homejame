import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Progressbar(){
  
    const percentage = 60;
   
    return(

        <div className = 'progressbar' style={{  width:1400,  height: 210, padding:'40'}}>
              
        <CircularProgressbar
        value={percentage} 
       text = {`💙`}
       strokeWidth={2}
       styles={buildStyles({
       textSize: '15px',
       textColor: 'white',
       pathColor: `rgb(221, 120, 137, ${percentage / 100})`,
       backgroundColor: '#3e98c7',
  })}
/>;

<CircularProgressbar
  strokeWidth={1}
   text = {`🎶`}
    styles={buildStyles({
    textSize: '15px',
    textColor: 'white',
    pathColor: `rgb(252, 241, 241, ${percentage / 100})`,
    backgroundColor: '#3e98c7',
  })}
/>;
  
<CircularProgressbar
  strokeWidth={1}
  text = {`🎶`}
  styles={buildStyles({
    textSize: '15px',
    textColor: 'white',
    pathColor: `rgb(252, 241, 241, ${percentage / 100})`,
    backgroundColor: '#3e98c7',  
  })}
/>;

 <CircularProgressbar 
text = {`🎶`}
strokeWidth={1}
  styles={buildStyles({  
    textSize: '15px',
    textColor: 'white',
    pathColor: `rgb(252, 241, 241, ${percentage / 100})`,
    backgroundColor: '#3e98c7',  
  })}
 /> 
 
 </div>
 )
}
  
