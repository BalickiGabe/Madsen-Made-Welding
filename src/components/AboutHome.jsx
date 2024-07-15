import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";

export default function AboutHome() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", lg: "row" },
        justifyContent: "space-between",
        padding: "1rem",
        paddingBottom: "3rem",
        paddingTop: "8rem",
        backgroundColor: "white",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        borderRadius: { sm: "6px", lg: "4px" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginTop: "2rem",
          marginLeft: { sm: "4rem", lg: "2.5rem" },
          marginRight: { sm: "1rem", lg: "6rem" },
          color: "black",
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
          Family Owned & Operated!
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1rem", borderTop: "1px solid #ccc" }}
        >
          At Madsen Made Welding & Fabrication, we are your go-to provider for
          custom railings and fabrication services. As a family-owned business,
          we take pride in our work, providing every customer with excellent
          products and services they can count on. We specialize in creating
          custom railings that meet the unique needs of each client, and we
          employ the latest technologies and techniques to ensure that every
          project is a success.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          As an in-demand welding company, we are committed to two main
          principles: providing the highest level of service possible and
          ensuring that our prices remain competitive and affordable. This focus
          on price and service is why so many of our clients are so loyal to us
          and are happy to recommend us to others!
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
