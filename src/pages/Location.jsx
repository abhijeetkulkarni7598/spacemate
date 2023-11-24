import React from 'react'
import { useState } from 'react'

const Location = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
    const thisfun=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
        })
      }
        return (
          <div>
            <button onClick={()=>thisfun()}>On click</button>
         <p>Lat {lat}</p>
         <p>Long {lon}</p>
          </div>
        );
  
}

export default Location
