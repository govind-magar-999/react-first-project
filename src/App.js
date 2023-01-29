import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import BasicExample from './cards/card.js';
import Profile from './profile/Profile.js';

function MyApp() {
  const [details, setDetails] = useState()

  // UseEffect hook demo
const getData = async () => {
  const {data} = await axios.get("https://randomuser.me/api/")
  const details = data.results[0]
  setDetails(details)
  console.log(details);
}

useEffect(() => {
  getData()
}, [])

    return (
      <>
        <h1 style={{color:'#233c7b', textAlign:'center', marginTop:'60px'}}>“Pure Hardwork, No Shortcuts!”</h1>
        <div style={{display:'flex', textAlign:'center', justifyContent:'space-around', alignItems:'center', margin:'40px 0'}}>
        <BasicExample heading="600+" desc="Different Courses" imgLink="https://ineuron.ai/images/landing-page/statistics/books-icon.svg"/>
        <BasicExample heading="500000+" desc="Students Enrolled" imgLink="https://ineuron.ai/images/landing-page/statistics/student-iocn.svg"/>
        <BasicExample heading="10000+" desc="Successful Transition" imgLink="https://ineuron.ai/images/landing-page/statistics/credit-card-icon.svg"/>
    </div>
    <h1 style={{color:'#233c7b', textAlign:'center', marginTop:'60px'}}>“Our Alumnis”</h1>
      <div style={{display:'flex', textAlign:'center', justifyContent:'space-around', alignItems:'center', margin:'40px 0'}}>
      <Profile details={details} />
      </div>
      </>
    );
  }

  export default MyApp;