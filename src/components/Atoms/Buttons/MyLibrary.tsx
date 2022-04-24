import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyLibrary = () => {
  const history = useNavigate();
  return (
    <Button
      data-testid="MyLibrary-element"
      onClick={() => history("/")}
      variant="text"
      color="inherit"
      size="medium"
      sx={{ paddingRight: "80px", display: "inline" }}
    >
      My library
    </Button>
  );
};


export default MyLibrary;
