import React from "react";
import { Box } from "@mui/material";
import Header from "../../Header";
import PhotoGallery from "./PhotoGallery";
import Footer from "../../Footer";

const photos = [
  { src: "/images/WoodSteel/FeatureWood.jpeg" },
  { src: "/images/WoodSteel/Wood1.jpeg" },
  { src: "/images/WoodSteel/Wood2.webp" },
  { src: "/images/WoodSteel/Wood3.jpeg" },
  { src: "/images/WoodSteel/Wood4.jpeg" },
  { src: "/images/WoodSteel/Wood5.jpeg" },
  { src: "/images/WoodSteel/Wood6.jpeg" },
  { src: "/images/WoodSteel/Wood7.jpeg" },
  { src: "/images/WoodSteel/Wood8.jpeg" },
  { src: "/images/WoodSteel/Wood9.jpeg" },
  { src: "/images/WoodSteel/Wood10.jpeg" },
  { src: "/images/WoodSteel/Wood11.jpeg" },
  { src: "/images/WoodSteel/Wood12.jpeg" },
  { src: "/images/WoodSteel/Wood13.jpeg" },
  { src: "/images/WoodSteel/Wood14.jpeg" },
  { src: "/images/WoodSteel/Wood15.jpeg" },
  { src: "/images/WoodSteel/Wood16.jpeg" },
  { src: "/images/WoodSteel/Wood17.jpeg" },
  { src: "/images/WoodSteel/Wood18.jpeg" },
  { src: "/images/WoodSteel/Wood19.jpeg" },
  { src: "/images/WoodSteel/Wood20.jpeg" },
  { src: "/images/WoodSteel/Wood21.jpeg" },
  { src: "/images/WoodSteel/Wood22.jpeg" },
  { src: "/images/WoodSteel/Wood23.jpeg" },
  { src: "/images/WoodSteel/Wood24.jpeg" },
  { src: "/images/WoodSteel/Wood25.jpeg" },
  { src: "/images/WoodSteel/Wood26.jpeg" },
  { src: "/images/WoodSteel/Wood27.jpeg" },
  { src: "/images/WoodSteel/Wood28.jpeg" },
  { src: "/images/WoodSteel/Wood29.jpeg" },
  { src: "/images/WoodSteel/Wood30.jpeg" },
  { src: "/images/WoodSteel/Wood31.jpeg" },
  { src: "/images/WoodSteel/Wood32.jpeg" },
  { src: "/images/WoodSteel/Wood33.png" },
];

export default function SteelWoodRail() {
  return (
    <Box>
      <Header />
      <PhotoGallery photos={photos} />
      <Footer />
    </Box>
  );
}
