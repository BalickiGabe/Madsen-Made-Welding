import React from "react";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import Carousel from "./Carousel";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Carousel />
    </Container>
  );
}

// https://gatefootforge.co.uk/
