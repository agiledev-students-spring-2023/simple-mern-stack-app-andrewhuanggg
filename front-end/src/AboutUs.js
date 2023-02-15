
import './AboutUs.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
//const img = require('./pictureofme.jpg')

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {

  const [aboutUs, setaboutUs] = useState({})
  const [imgSrc, setImgSrc] = useState('')

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(res => {
        //console.log(res.data)
        setaboutUs(res.data)
        setImgSrc(res.data.img)
        //setaboutUs(res.data.aboutUs)
        
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
  }, [])

  return (
    <>
      <h1 class="about">{aboutUs.title}</h1>
      <br></br>
      <p class="about">{aboutUs.paragraph1}</p>
      <br></br>
      <p class="about">{aboutUs.paragraph2}</p>
      <br></br>
      <img class = "aboutimg" src= {imgSrc} alt="picture of me"/>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
