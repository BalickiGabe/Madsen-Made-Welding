import React from "react";
import Header from "../Header";
import { Box } from "@mui/material";
import AboutHome from "../AboutHome";
import Footer from "../Footer";
import Testimonial from "../Testimonials";
import BehindWelding from "../BehindWelding";

export default function Home() {
  return (
    <Box>
      <Header />
      <BehindWelding />
      {/* <Testimonial /> */}
      <AboutHome />
      <Footer />
    </Box>
  );
}
