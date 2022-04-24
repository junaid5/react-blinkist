import React from 'react'
import { Stack, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'

const ExploreData=({con}:any)=> {
  const history=useNavigate()
  return (
    <Stack direction="row" spacing={1}>
        <img src={con.img} />
        <Typography onClick={()=>history('/entrepreneurship')} variant="body2" color="#6D787E" fontWeight="400" sx={{cursor: "pointer"}}>{con.content}</Typography>
    </Stack>
  )
}

export default ExploreData