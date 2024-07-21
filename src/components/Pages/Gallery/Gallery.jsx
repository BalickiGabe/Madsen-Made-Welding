import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../Header";
import GalleryCard from "./GalleryCard";
import Footer from "../../Footer";

export default function Gallery() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "#b29e85",

          borderRadius: { sm: "6px", lg: "4px" },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            mx: { sm: "4rem", lg: "6rem" },
            my: { sm: "1rem", lg: "5rem" },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "white",
              borderBottom: "1px solid white",
              fontSize: { sm: "4rem", lg: "3rem" },
            }}
          >
            Our projects tell our story
          </Typography>
          <Typography
            variant="body"
            gutterBottom
            sx={{
              color: "white",
              fontSize: { sm: "15px", lg: "1.7rem" },
              marginTop: "3rem",
            }}
          >
            Check out our portfolio of work to spark ideas for transforming your
            indoor and outdoor spaces. We take pride in bringing visions to life
            with a personal touch.
          </Typography>
        </Box>
      </Box>
      {/* Gallery Cards */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        sx={{ backgroundColor: "white" }}
      >
        <GalleryCard
          image="/images/CableRailing/CableFeature.png"
          title="Cable Railing"
          body="A modern and sleek look while providing unobstructed views"
        />
        <GalleryCard
          image="/images/WoodSteel/FeatureWood.jpeg"
          title="Wood & Steel Railings "
          body="Ideal for their sturdy construction and classic, warm aesthetic"
        />
        <GalleryCard
          image="/images/SteelRailing/FeatureSteel.jpeg"
          title="Steel Railings"
          body="Elevate your space with sleek, durable custom steel railings."
        />
        <GalleryCard
          image="/images/OutdoorRailings/FeatureOutdoor.png"
          title="Deck & Outdoor Railings"
          body="Create a secure environment while enhancing the beauty of your outdoor space"
        />
        <GalleryCard
          image="/images/Gates/Gate7.jpeg"
          title="Gates"
          body="Provide safety and peace of mind, ensure a secure environment for your loved ones"
        />
        <GalleryCard
          image="/images/CustomProjects/CustomFeature.jpeg"
          title="Custom Projects"
          body="Create unique pieces that reflect your personal style and needs"
        />
        <GalleryCard
          image="/images/Ornamental/FeatureOrnamental.png"
          title="Ornamental"
          body="Transform your space with custom ornamental metal masterpieces."
        />

        <GalleryCard
          image="/images/Commercial/CommercialFeature.jpeg"
          title="Commercial"
          body="Exceptional commercial welding solutions for superior strength and precision."
        />
      </Box>
      <Footer />
    </Box>
  );
}
