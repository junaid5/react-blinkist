import { Typography } from '@mui/material'
import React from 'react'


const FooterElement=({content}: any)=> {
  return (
    <Typography data-testid="Footer-element" variant="body2" color="#6D787E" fontWeight="500">
        {content}
    </Typography>
  )
}

export default FooterElement