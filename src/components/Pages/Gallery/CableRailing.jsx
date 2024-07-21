import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../Header";
import GalleryCard from "./GalleryCard";
import Footer from "../../Footer";

const photos = [
  { url: "/images/CableRailing/CableFeature.png", alt: "Photo 1" },
];

export default function CableRailing() {
  return (
    <Box>
      <Header />
      <div>
        <h1>Photo Gallery</h1>
        <GalleryCard photos={photos} />
      </div>
      <Footer />
    </Box>
  );
}
