import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/Ornamental/FeatureOrnamental.png" },
  { src: "/images/Ornamental/Orn1.jpeg" },
  { src: "/images/Ornamental/Orn2.jpeg" },
  { src: "/images/Ornamental/Orn3.jpeg" },
  { src: "/images/Ornamental/Orn4.jpeg" },
  { src: "/images/Ornamental/Orn5.jpeg" },
];

export default function Ornamental() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
