import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", lg: "row" },
        justifyContent: "space-between",
        marginTop: "2rem",
        padding: "1rem",
        paddingBottom: "3rem",
        backgroundColor: "white",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        borderRadius: { sm: "6px", lg: "4px" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginTop: "7rem",
          marginLeft: { sm: "4rem", lg: "2rem" },
          marginRight: { sm: "1rem", lg: "6rem" },
          color: "black",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "black" }}>
          From elegant railings to unique structural elements, we're here to
          turn your dreams into reality.
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: "2rem", borderTop: "1px solid #ccc" }}
        >
          At Madsen Made Welding & Fabrication, we are your go-to provider for
          custom railings and fabrication services. As a family-owned business,
          we take pride in our work, providing every customer with excellent
          products and services they can count on. We specialize in creating
          custom railings that meet the unique needs of each client, and we
          employ the latest technologies and techniques to ensure that every
          project is a success. Contact us today to learn more about how we can
          help bring your vision to life.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/Services")}>
          Explore Services
        </Button>
      </Box>
      <Box sx={{ flex: 1, marginRight: { sm: "none", lg: "1rem" } }}>
        <Carousel />
      </Box>
    </Box>
  );
}
