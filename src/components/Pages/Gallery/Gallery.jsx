import React from "react";
import { Box, Typography } from "@mui/material";
import SecondaryNavBar from "../../SecondaryNavBar";
import GalleryCard from "./GalleryCard";
import Footer from "../../Footer";

export default function Gallery() {
  return (
    <Box>
      <SecondaryNavBar />
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
        p={2}
        sx={{ backgroundColor: "#e8e8dc" }}
      >
        <GalleryCard
          image="/images/jake%20welding.jpg"
          title="Title Here"
          body="Body text here. This is a description or content area."
        />
        <GalleryCard
          image="/images/jake%20welding.jpg"
          title="Title Here"
          body="Body text here. This is a description or content area."
        />
        <GalleryCard
          image="/images/jake%20welding.jpg"
          title="Title Here"
          body="Body text here. This is a description or content area."
        />
        <GalleryCard
          image="/images/jake%20welding.jpg"
          title="Title Here"
          body="Body text here. This is a description or content area."
        />
        <GalleryCard
          image="/images/jake%20welding.jpg"
          title="Title Here"
          body="Body text here. This is a description or content area."
        />
      </Box>
      <Footer />
    </Box>
  );
}
