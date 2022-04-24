import React from 'react'
import Blinklogo from './Blinklogo.png'

type imgProps={
    height: string,
    width: string
}


const Icons=({height, width}: imgProps)=> {
  return (
    <img data-testid="Icon-element" src={Blinklogo} height={height} width={width} alt="" style={{marginTop: "15px",display: "inline"}} />
  )
}

export default Icons
