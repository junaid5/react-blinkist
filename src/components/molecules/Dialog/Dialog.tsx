import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container } from "@mui/material";
import ExploreTab from "../../Atoms/Tabs/ExploreTab";
import { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import ExploreData from "./ExploreData";

const style = {
  position: "absolute" as "absolute",
  top: "47%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 398,
  width: 1300,
  bgcolor: "#F1F6F4",
  boxShadow: 10,
  p: 4,
};

 const BasicModal=()=> {
  const [explore, setExplore] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("http://localhost:8000/explore")
      .then((res) => res.json())
      .then((data) => setExplore(data));
  }, []);

  return (
    <div data-testid="BasicModal-element">
      <Button
        onClick={handleOpen}
        variant="text"
        color="inherit"
        size="medium"
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ marginTop: "10px" }}
      >
        Explore
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{style: {top: "70px"}}}
        disableScrollLock={true}
      >
        <Box sx={style}>
          <Container maxWidth="md">
            <ExploreTab />
            <Grid container spacing={3} sx={{ marginTop: "5px" }}>
              {explore.map((con) => (
                <Grid item xs={12} md={6} lg={4}>
                  <ExploreData con={con} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal
