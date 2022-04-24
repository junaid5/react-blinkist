import React from "react";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import pic from '../../../../src/Photo.png'

const Banner = () => {
  return (
    <Box data-testid="Banner-element" height="264px" width="912px" sx={{ backgroundColor: "#F1F6F4" }}>
      <Stack direction="row" sx={{marginLeft: "50px"}}>
        <Stack spacing={4}>
          <Typography fontWeight="700" fontSize="36px" color="#03314B" sx={{height: "90px",width: "319px",marginTop: "30px"}}>
            Explore Books on entrepreneurship
          </Typography>
          <Typography fontWeight="400" fontSize="18px"  color="#6D787E" sx={{height: "69px",width: "461px"}}>
            Everything you need to know about thriving on a shoestring budget,
            making your first million, and hiring right from the start.
          </Typography>
        </Stack>
        <img src={pic} height="230px" width="249px" style={{marginLeft: "70px"}} />
      </Stack>
    </Box>
  );
};

export default Banner;
