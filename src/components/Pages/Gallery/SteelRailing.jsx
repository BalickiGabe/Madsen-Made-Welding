import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/SteelRailing/FeatureSteel.jpeg" },
  { src: "/images/SteelRailing/Steel1.jpeg" },
  { src: "/images/SteelRailing/Steel2.jpeg" },
  { src: "/images/SteelRailing/Steel3.jpeg" },
  { src: "/images/SteelRailing/Steel4.png" },
  { src: "/images/SteelRailing/Steel5.jpeg" },
  { src: "/images/SteelRailing/Steel6.jpeg" },
  { src: "/images/SteelRailing/Steel7.jpeg" },
  { src: "/images/SteelRailing/Steel8.jpeg" },
  { src: "/images/SteelRailing/Steel9.jpeg" },
  { src: "/images/SteelRailing/Steel10.jpeg" },
  { src: "/images/SteelRailing/Steel11.jpeg" },
];

export default function SteelRailing() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
