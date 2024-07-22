import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/Commercial/CommercialFeature.jpeg" },
  { src: "/images/Commercial/Commercial.jpeg" },
];

export default function Commercial() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
