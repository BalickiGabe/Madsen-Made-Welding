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
        borderRadius: { sm: "6px", lg: "4px" },
        backgroundColor: "white",
        width: "100%",

        backgroundSize: "30% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: { sm: "30rem", lg: "27rem" },
        backgroundImage: `url(${imageUrl})`,
        overflow: "hidden",
      }}
    >
      <NavBar />
    </Box>
  );
}
