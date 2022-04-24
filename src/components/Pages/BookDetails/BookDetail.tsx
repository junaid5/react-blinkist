import React, { useEffect, useState } from "react";
import Toolbar from "../../molecules/ToolBar/Toolbar";
import { Container, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookTab from "../../Atoms/Tabs/BookTab";
import Footer from "../../molecules/Footers/Footer";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setEnvironmentData } from "worker_threads";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

const BookDetail = () => {
  const location = useLocation();
  const nam: any = location.state;
  const [data, setData] = useState([]);

  const updateData = () => {
    var url = "http://localhost:8000/books/" + nam.id;
    console.log(nam.id);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        img: nam.img,
        bookName: nam.bookName,
        bookAuthor: nam.bookAuthor,
        time: nam.time,
        reads: nam.reads,
        isFinished: nam.isFinished,
        content: "Finished",
        bool: !nam.bool,
        addLib: "true",
      }),
    }).then((res) => res.json());
  };

  const updateFinishedData = () => {
    var url = "http://localhost:8000/books/" + nam.id;
    console.log(nam.id);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        img: nam.img,
        bookName: nam.bookName,
        bookAuthor: nam.bookAuthor,
        time: nam.time,
        reads: nam.reads,
        isFinished: "true",
        content: "Read Again",
        bool: !nam.bool,
        addLib: "true",
      }),
    }).then((res) => res.json());
  };

  return (
    <div>
      <Toolbar />
      <Container maxWidth="md">
        <Typography variant="body2">Get the key ideas from</Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ top: "20px", position: "relative" }}
        >
          <Stack spacing={3}>
            <Typography fontWeight="700" fontSize="36px" color="#03314B">
              {nam.bookName}
            </Typography>
            <Typography fontWeight="400" fontSize="20px" color="#03314B">
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography fontWeight="400" fontSize="16px" color="#6D787E">
              {nam.bookAuthor}
            </Typography>
            <Stack direction="row">
              <AccessTimeIcon sx={{ color: "#6D787E" }} />
              <Typography fontWeight="400" fontSize="14px" color="#6D787E">
                {nam.time}
              </Typography>
            </Stack>
            <ThemeProvider theme={theme}>
              <Stack
                direction="row"
                spacing={3}
                sx={{ top: "30px", position: "relative" }}
              >
                <Button
                  onClick={updateData}
                  variant="outlined"
                  sx={{ color: "#22C870" }}
                >
                  Read now
                </Button>
                <Button
                  onClick={updateFinishedData}
                  variant="contained"
                  sx={{ backgroundColor: "#22C870" }}
                >
                  Finished Reading
                </Button>
                <Button
                  variant="text"
                  sx={{ color: "#6D787E" }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Send to Kindle
                </Button>
              </Stack>
            </ThemeProvider>
          </Stack>
          <img
            src={nam.img}
            height="304px"
            width="304px"
            style={{ left: "60px", position: "relative" }}
          />
        </Stack>
        <BookTab />
        <Typography
          color="#03314B"
          fontWeight="400"
          fontSize="16px"
          sx={{ width: "600px", marginBottom: "257px" }}
        >
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text, supplemented with cutting-edge insights and case
          studies pertinent to today’s business world.
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default BookDetail;
function then(arg0: (data: any) => any) {
  throw new Error("Function not implemented.");
}
