import { Box } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  const imageUrl = process.env.PUBLIC_URL + "/images/logo.jpeg";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        borderRadius: { sm: "25px", lg: "8px" },
        backgroundColor: "white",
        margin: "auto -175px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        backgroundSize: "30% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "30rem",
        textAlign: { sm: "center", lg: "left" },
        backgroundImage: `url(${imageUrl})`,
        overflow: "hidden",
      }}
    >
      <NavBar />
    </Box>
  );
}
