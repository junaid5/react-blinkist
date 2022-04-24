import { useState, useEffect } from "react";
import { Container, Box, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Search from "../../../Searc.png";
import CardData from "../../molecules/Cards/CardData";
import { Grid } from "@mui/material";
import PageDetails from "../PageDetails/PageDetails";

const useStyles = makeStyles({
  input: {
    fontSize: "16px",
    width: "563.35px",
    border: "white",
    "&:focus": {
      outline: "none",
    },
  },
});

const SearchStyle = styled("div")({
  width: "598px",
  height: "28px",
  display: "flex",
  gap: "10.65px",
  borderBottom: "2px solid #BAC9CF",
});

const ImageStyled = styled("div")({
  marginLeft: "5px",
  marginTop: "5px",
});

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/search")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const searchItems = (searchValue: any) => {
    setSearch(searchValue);
    if (search !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };
  console.log(search);
  const style = useStyles();
  return (
    <>
      <Container sx={{ position: "relative", top: "60px" }}>
        <Box sx={{ margin: "0 auto", width: "912px" }}>
          <SearchStyle>
            <ImageStyled>
              <img src={Search} alt="" width="19px" height="19px" />
            </ImageStyled>
            <input
              type="text"
              placeholder="Search by title or author"
              className={style.input}
              onChange={(e) => searchItems(e.target.value)}
            />
          </SearchStyle>
        </Box>
        <Grid container spacing={1} sx={{width: "890px",marginRight: "10px"}}>
        {search.length>1 ? ( filteredResults.map(card=>(
          <Grid item  xs={12} md={6} lg={4}>
            <CardData card={card} />
          </Grid>
        ))): (<PageDetails/>)} 
      </Grid>
      </Container>
    </>
  );
};

export default SearchBar;
