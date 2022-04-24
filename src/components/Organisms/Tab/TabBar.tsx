import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { Grid } from '@mui/material'
import CardData from '../../molecules/Cards/CardData'

const theme = createTheme({
    palette: {
      primary: {
          main: "#22C870"
      }
    },
    typography: {
        fontFamily: "Cera Pro",
        fontWeightBold: 700,
        fontSize: 18,
    }
  });


 const TabBar=()=> {
  const [value, setValue] = React.useState('one');
  const [finished,setFinished]=React.useState([])
  const [curr,setCurr]=React.useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/books')
      .then(res=>res.json())
      .then(data=>setFinished(data))
  },[])

  useEffect(()=>{
    fetch('http://localhost:8000/books')
      .then(res=>res.json())
      .then(item=>item.filter((ele: any)=>ele.isFinished==='false' && ele.addLib==='true'))
      .then(data=>setCurr(data))
  },[])

  const FilterCurrData=()=>{
    const newData=finished.filter(function(ele: any): boolean{
        return ele.isFinished==='false' && ele.addLib==='true'
    })
    setCurr(newData)
}

  const FilterData=()=>{
      const newData=finished.filter(function(ele: any): boolean{
          return ele.isFinished==='true'
      })
      setCurr(newData)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
      <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
        >
            <Tab onClick={()=>FilterCurrData()} value="one" label="Currently reading" />
            <Tab onClick={()=>FilterData()} value="two" label="Finished" />
        </Tabs>
        </Box>
    </ThemeProvider>
    <Grid container spacing={1} sx={{width: "890px",marginRight: "10px"}}>
        {curr.map(card=>(
          <Grid item  xs={12} md={6} lg={4}>
            <CardData card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TabBar
