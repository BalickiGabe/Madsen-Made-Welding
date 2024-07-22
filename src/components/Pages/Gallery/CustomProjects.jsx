import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/CustomProjects/CustomFeature.jpeg" },

  { src: "/images/CustomProjects/Custom3.jpeg" },
  { src: "/images/CustomProjects/Custom2.jpeg" },
  { src: "/images/CustomProjects/Custom1.jpeg" },
];

export default function CustomProjects() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
