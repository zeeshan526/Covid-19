import React from 'react'
import image from './images/prevention.jpg';
function Prevention() {
  return (
    <div  >
    <h1 style={{color:'Green', textAlign:'center'}}>Preventions From CoronaVirus</h1>
    <center><img  src={image} alt="COVID-19" width='340px' height='100px' /></center>
    
      <h4 style={{marginLeft:'10px'}}>To prevent infection and to slow transmission of COVID-19, do the following:</h4>

<li style={{ color:'blue' , marginLeft:'10px'}}>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li> 
<li style={{ color:'blue' , marginLeft:'10px'}}>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
<li style={{ color:'blue' , marginLeft:'10px'}}>Avoid touching your face.</li>
<li style={{ color:'blue' , marginLeft:'10px'}}>Cover your mouth and nose when coughing or sneezing.</li>
<li style={{ color:'blue' , marginLeft:'10px'}}>Stay home if you feel unwell.</li>
<li style={{ color:'blue' , marginLeft:'10px'}}>Refrain from smoking and other activities that weaken the lungs.</li>
<li style={{ color:'blue' , marginLeft:'10px'}}>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
    </div>
  )
}

export default Prevention
