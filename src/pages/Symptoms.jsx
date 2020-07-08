import React from 'react'
import image from './images/symptoms.jpg';
function Symptoms() {
    return (
        <>
        <h1 style={{color:'red', textAlign:'center'}}>Symptoms Of CoronaVirus</h1>
        <center><img  src={image} alt="COVID-19" width='340px' height='140px' overflow='hidden' /></center>
           <div> <h4  style={{ marginLeft:'10px'}} >COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</h4></div >
<li   style={{color:'Green', marginLeft:'10px'}}>
Most common symptoms:

    fever.
    dry cough.
    tiredness.
    </li>
<li  style={{color:'Green', marginLeft:'10px'}}>
Less common symptoms:

    aches and pains.
    sore throat.
    diarrhoea.
    conjunctivitis.
    headache.
    loss of taste or smell.
    a rash on skin, or discolouration of fingers or toes.
</li>
<li   style={{color:'Green', marginLeft:'10px'}}>
Serious symptoms:

    difficulty breathing or shortness of breath.
    chest pain or pressure.
    loss of speech or movement.
</li>
<li   style={{color:'Green', marginLeft:'10px'}}>Seek immediate medical attention if you have serious symptoms.  Always call before visiting your doctor or health facility. </li>

<li style={{color:'Green', marginLeft:'10px'}}>People with mild symptoms who are otherwise healthy should manage their symptoms at home. </li>

<li   style={{color:'Green', marginLeft:'10px'}}>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</li> 
        </>
    )
}

export default Symptoms
