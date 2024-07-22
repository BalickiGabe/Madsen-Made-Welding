import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/Gates/FeatureGate.png" },
  { src: "/images/Gates/Gate1.jpeg" },
  { src: "/images/Gates/Gate2.jpeg" },
  { src: "/images/Gates/Gate3.jpeg" },
  { src: "/images/Gates/Gate4.jpeg" },
  { src: "/images/Gates/Gate5.jpeg" },
  { src: "/images/Gates/Gate6.jpeg" },
  { src: "/images/Gates/Gate7.jpeg" },
];

export default function Gates() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
