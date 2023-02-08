import {
  Button,
  ButtonGroup,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  return (
    <>
      <Toolbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            md: "start",
          },
          justifyContent: "center",
          rowGap: 2,
          minHeight: {
            xs: "50vh",
            md: "90vh",
          },
          maxWidth: {
            xs: "20rem",
            sm: "30rem",
            md: "50rem"
          },
        }}
      >
        <Typography
          component="div"
          textAlign={{
            xs: "center",
            sm: "start",
          }}
          whiteSpace={{ xs: "0.7" }}
          fontWeight="600"
          fontSize={{ xs: "1.5rem", md: "4rem" }}
        >
          Learn to be Productive & develop your mind to become Efficent
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Button variant="contained">Register</Button>
          <Button variant="outlined">Login</Button>
        </Stack>
      </Container>
      <Container
        sx={{ backgroundColor: "gray", minHeight: "90vh" }}
      ></Container>
    </>
  );
};

export default Home;
