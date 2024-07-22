import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/OutdoorRailings/FeatureOutdoor.png" },
  { src: "/images/OutdoorRailings/Outdoor1.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor2.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor3.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor4.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor5.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor6.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor7.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor8.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor9.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor10.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor11.jpeg" },
  { src: "/images/OutdoorRailings/Outdoor12.jpeg" },
];

export default function OutdoorRailing() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
