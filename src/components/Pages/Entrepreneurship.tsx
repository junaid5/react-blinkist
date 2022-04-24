import React from 'react'
import ToolBar from '../molecules/ToolBar/Toolbar'
import { Container } from '@mui/material'
import Banner from '../molecules/Banner/Banner'
import SearchBar from '../Organisms/SearchBar/SearchBar'
import Footer from '../molecules/Footers/Footer'

const Entrepreneurship=()=> {
  return (
    <div>
        <ToolBar/>
        <Container maxWidth="md">
            <Banner/>
            <SearchBar />
        </Container>
        <Footer/>
    </div>
  )
}

export default Entrepreneurship