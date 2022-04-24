import { Typography } from '@mui/material'
import React from 'react'

const FooterHead=({content}: any) =>{
  return (
    <Typography variant="body1" color="#03314B" fontWeight="700">
        {content}
    </Typography>
  )
}

export default FooterHead