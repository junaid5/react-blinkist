import React from "react";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import {  useNavigate } from "react-router-dom";

const CardData = ({ card }: any) => {
  var str: string = "false";
  var fstr: string = "Finished";
  var ids = card.id;
  const navigate = useNavigate();
  const UpdateData = () => {
    if (card.content === "Add to Library") {
      var types: string
      navigate("/BookDetail", {
        state: {
          img: card.img,
          bookName: card.bookName,
          bookAuthor: card.bookAuthor,
          time: card.time,
          reads: card.reads,
          isFinished: card.isFinished,
          content: card.content,
          bool: card.bool,
          addLib: card.addLib,
          id: card.id,
          type: card.type
        },
      });
      var urls='http://localhost:8000/'+card.type+'/'+card.id
      fetch(urls, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          img: card.img,
          bookName: card.bookName,
          bookAuthor: card.bookAuthor,
          time: card.time,
          reads: card.reads,
          isFinished: card.isFinished,
          content: "...",
          bool: !card.bool,
          addLib: card.addLib,
          type: card.type
        }),
      }).then((res) => res.json());
    } else {
      if (card.bool) {
        str = "false";
        fstr = "Finished";
      }
      if (!card.bool) {
        str = "true";
        fstr = "Read Again";
      }
      var url = "http://localhost:8000/books/" + ids;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          img: card.img,
          bookName: card.bookName,
          bookAuthor: card.bookAuthor,
          time: card.time,
          reads: card.reads,
          isFinished: str,
          content: fstr,
          bool: !card.bool,
          addLib: card.addLib,
        }),
      }).then((res) => res.json());
      window.location.reload();
    }
  };
  return (
    <Card sx={{ width: "285px", height: "440px", marginTop: "10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={card.img}
        sx={{ height: "287px", width: "285px" }}
      />
      <CardContent>
        <Typography
          sx={{
            fontFamily: "PT Sans",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "23px",
          }}
        >
          {card.bookName}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "8px", color: "#6D787E" }}>
          {card.bookAuthor}
        </Typography>
        <Stack direction="row" sx={{ marginTop: "8px" }}>
          <AccessTimeIcon
            sx={{ color: "#6D787E", height: "16.67px", width: "16.67px" }}
          />
          <Typography
            sx={{ color: "#6D787E", height: "18px", fontSize: "14px" }}
          >
            {card.time}
          </Typography>
          <PersonOutlineOutlinedIcon
            sx={{ color: "#6D787E", marginLeft: "16.6%", height: "18px" }}
          />
          <Typography
            sx={{
              color: "#6D787E",
              height: "18px",
              width: "64px",
              fontSize: "14px",
            }}
          >
            {card.reads}
          </Typography>
        </Stack>
        <Button
          onClick={UpdateData}
          variant="text"
          fullWidth
          sx={{ height: "40px", fontWeight: "bold", marginTop: "8px" }}
          size="large"
        >
          {card.content}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardData;
