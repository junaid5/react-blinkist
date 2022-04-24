import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
          main: "#22C870"
      }
    }
  });

 const ColorTabs=()=> {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div data-testid="BookTab-element"> 
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%',marginTop: "30px",marginBottom: "20px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab value="one" label="Synopsis" />
        <Tab value="two" label="Who is it for?" />
        <Tab value="three" label="About the author" />
      </Tabs>
    </Box>
    </ThemeProvider>
    </div>
  );
}

export default ColorTabs