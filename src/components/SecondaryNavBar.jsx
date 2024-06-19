import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SecondaryNavBar = ({ buttons }) => {
  const imageUrl = process.env.PUBLIC_URL + "/images/justLogo.jpeg";
  const navigate = useNavigate();

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
          {buttons.map((button) => (
            <Button
              key={button.label}
              onClick={() => navigate(button.route)}
              sx={{ fontSize: { sm: "1.5rem", lg: ".85rem" } }}
            >
              {button.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default SecondaryNavBar;
