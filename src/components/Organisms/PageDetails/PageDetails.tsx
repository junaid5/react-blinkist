import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import CardData from '../../molecules/Cards/CardData'

const PageDetails=()=> {
  const [trending,setTrending]=useState([])
  const [added,setAdded]=useState([])
  const [audio,setAudio]=useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/trending')
      .then(res=>res.json())
      .then(data=>setTrending(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:8000/added')
      .then(res=>res.json())
      .then(data=>setAdded(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:8000/audio')
      .then(res=>res.json())
      .then(data=>setAudio(data))
  },[])

  return (
    <div>
      <Typography fontWeight="700" fontSize="24px" sx={{marginTop: "50px"}}>
        Trending Blinks
      </Typography>
      <Grid container spacing={1} sx={{width: "890px",marginRight: "10px"}}>
        {trending.map(card=>(
          <Grid item  xs={12} md={6} lg={4}>
            <CardData card={card} />
          </Grid>
        ))}
      </Grid>
      <Typography fontWeight="700" fontSize="24px" sx={{marginTop: "50px"}}>
      Just added
      </Typography>
      <Grid container spacing={1} sx={{width: "890px",marginRight: "10px"}}>
        {added.map(card=>(
          <Grid item  xs={12} md={6} lg={4}>
            <CardData card={card} />
          </Grid>
        ))}
      </Grid>
      <Typography fontWeight="700" fontSize="24px" sx={{marginTop: "50px"}}>
      Featured audio blinks
      </Typography>
      <Grid container spacing={1} sx={{width: "890px",marginRight: "10px"}}>
        {audio.map(card=>(
          <Grid item  xs={12} md={6} lg={4}>
            <CardData card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PageDetails