import Search from '../../Atoms/BlinkIcon/Search'
import React from 'react'
import Icons from '../../Atoms/BlinkIcon/Icons'
import MyLibrary from '../../Atoms/Buttons/MyLibrary'
import Anchor from '../../Atoms/Anchor/Anchor'
import { Container, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dialog from '../Dialog/Dialog'

const Toolbar=()=> {
  return (
    <div style={{display: "flex",marginLeft: "240px",marginBottom: "20px"}}>
        <Icons height='26px' width='124px'/>
        <Search/>
        <Dialog/>
        <MyLibrary/>
        <Anchor/>
        <KeyboardArrowDownIcon sx={{paddingTop: "22px"}}/>
        </div>
  )
}

export default Toolbar