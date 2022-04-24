import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      secondary: {
          main: "#6D787E"
      }
    },
    typography: {
        fontFamily: "Cera Pro",
        fontWeightBold: 500,
        fontSize: 16,
    }
  });

 const TabBar=()=> {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div data-testid="ExploreTab-element">
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="secondary"
        >
            <Tab value="one" label="Explore by category" />
            <Tab value="two" label="See recently added titles" />
            <Tab value="three" label="See popular titles" />
        </Tabs>
        </Box>
    </ThemeProvider>
    </div>
  );
}

export default TabBar
