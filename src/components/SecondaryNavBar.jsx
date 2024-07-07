import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function SecondaryNavBar() {
  const imageUrl = process.env.PUBLIC_URL + "/images/justLogo.jpeg";
  const navigate = useNavigate();
  const location = useLocation();

  const getButtonStyle = (path) => ({
    fontSize: { sm: "1.75rem", lg: ".85rem" },
    backgroundColor: location.pathname === path ? "white" : "default",
    color: location.pathname === path ? "black" : "defualt",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", lg: "row" },
        justifyContent: "space-between",
        alignItems: { sm: "center", lg: "flex-start" },
        marginTop: "2rem",
        padding: "1rem",
        paddingBottom: "3rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{
          backgroundColor: "white",
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          height: "10rem",
          backgroundImage: `url(${imageUrl})`,
          width: { sm: "100%", lg: "20%" },
          marginBottom: { sm: "1rem", lg: "0" },
        }}
      ></Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { sm: "center", lg: "flex-start" },
          marginTop: { sm: "1rem", lg: "7.5rem" },
        }}
      >
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            onClick={() => navigate("/")}
            sx={{
              ...getButtonStyle("/"),
              fontSize: { sm: "1.4rem", lg: ".85rem" },
            }}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate("/About")}
            sx={{
              ...getButtonStyle("/About"),
              fontSize: { sm: "1.4rem", lg: ".85rem" },
            }}
          >
            About
          </Button>
          <Button
            onClick={() => navigate("/Services")}
            sx={{
              ...getButtonStyle("/Services"),
              fontSize: { sm: "1.4rem", lg: ".85rem" },
            }}
          >
            Services
          </Button>
          <Button
            onClick={() => navigate("/Gallery")}
            sx={{
              ...getButtonStyle("/Gallery"),
              fontSize: { sm: "1.4rem", lg: ".85rem" },
            }}
          >
            Gallery
          </Button>
          <Button
            onClick={() => navigate("/OurProcess")}
            sx={{
              ...getButtonStyle("/OurProcess"),
              fontSize: { sm: "1.4rem", lg: ".85rem" },
            }}
          >
            Our Process
          </Button>
          <Button
            onClick={() => navigate("/Contact")}
            sx={{
              ...getButtonStyle("/Contact"),
              fontSize: { sm: "1.4rem", lg: ".85rem" },
            }}
          >
            Contact
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
