import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button
          onClick={() => navigate("/About")}
          sx={{ fontSize: { sm: "1.75rem", lg: ".85rem" } }}
        >
          About
        </Button>
        <Button
          onClick={() => navigate("/Services")}
          sx={{ fontSize: { sm: "1.75rem", lg: ".85rem" } }}
        >
          Services
        </Button>
        <Button
          onClick={() => navigate("/Gallery")}
          sx={{ fontSize: { sm: "1.75rem", lg: ".85rem" } }}
        >
          Gallery
        </Button>

        <Button
          onClick={() => navigate("/OurProcess")}
          sx={{ fontSize: { sm: "1.75rem", lg: ".85rem" } }}
        >
          Our Process
        </Button>

        <Button
          onClick={() => navigate("/Contact")}
          sx={{ fontSize: { sm: "1.75rem", lg: ".85rem" } }}
        >
          Contact
        </Button>
      </ButtonGroup>
    </Box>
  );
}
