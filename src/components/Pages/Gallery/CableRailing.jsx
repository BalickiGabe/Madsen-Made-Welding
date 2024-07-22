import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/CableRailing/CableFeature.png" },
  { src: "/images/CableRailing/Cable2.jpeg" },
  { src: "/images/CableRailing/Cable3.jpeg" },
  { src: "/images/CableRailing/Cable4.jpeg" },
  { src: "/images/CableRailing/Cable5.jpeg" },
  { src: "/images/CableRailing/Cable6.jpeg" },
  { src: "/images/CableRailing/Cable7.jpeg" },
  { src: "/images/CableRailing/Cable8.jpeg" },
  { src: "/images/CableRailing/Cable9.jpeg" },
  { src: "/images/CableRailing/Cable10.jpeg" },
  { src: "/images/CableRailing/Cable11.jpeg" },
  { src: "/images/CableRailing/Cable12.jpeg" },
  { src: "/images/CableRailing/Cable13.jpeg" },
  { src: "/images/CableRailing/Cable14.jpeg" },
  { src: "/images/CableRailing/Cable15.jpeg" },
];

export default function CableRailing() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
