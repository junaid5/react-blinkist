import React from 'react';
import Toolbar from '../molecules/ToolBar/Toolbar';
import { Stack} from '@mui/material';
import Typograph from '../Atoms/Typography/Typograph';
import { Container } from '@mui/material';
import Footer from '../molecules/Footers/Footer';
import TabBar from '../Organisms/Tab/TabBar';

const LandingPage=()=> {
  return (
    <div className="App">
      <Toolbar/>
      <Container maxWidth="md">
          <Stack spacing={6}>
            <Typograph/>
            <TabBar/>
          </Stack>
      </Container>
      <Footer/>
    </div>
  );
}

export default LandingPage;
