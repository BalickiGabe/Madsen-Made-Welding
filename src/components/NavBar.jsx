import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const imageUrl = process.env.PUBLIC_URL + "/images/logoImage.png";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 0,
      }}
    >
      <ButtonGroup
        variant="grouped"
        aria-label="Basic button group"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "90%",
        }}
      >
        <Button
          onClick={() => navigate("/")}
          sx={{
            padding: 0,
            minWidth: 0,
            width: { sm: "2.5rem", lg: "4.5rem" },
            height: { sm: "2.5rem", lg: "4.5rem" },
          }}
        >
          <img
            src={imageUrl}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Button>
        <Button
          onClick={() => navigate("/")}
          sx={{ fontSize: { sm: "1.5rem", lg: "1.25rem" } }}
        >
          Home
        </Button>
        <Button
          onClick={() => navigate("/About")}
          sx={{ fontSize: { sm: "1.5rem", lg: "1.25rem" } }}
        >
          About
        </Button>
        <Button
          onClick={() => navigate("/Services")}
          sx={{ fontSize: { sm: "1.5rem", lg: "1.25rem" } }}
        >
          Services
        </Button>
        <Button
          onClick={() => navigate("/Gallery")}
          sx={{ fontSize: { sm: "1.5rem", lg: "1.25rem" } }}
        >
          Gallery
        </Button>
        <Button
          onClick={() => navigate("/Testimonials")}
          sx={{ fontSize: { sm: "1.5rem", lg: "1.25rem" } }}
        >
          Testimonials
        </Button>
        <Button
          onClick={() => navigate("/Contact")}
          sx={{ fontSize: { sm: "1.5rem", lg: "1.25rem" } }}
        >
          Contact
        </Button>
      </ButtonGroup>
    </Box>
  );
}
