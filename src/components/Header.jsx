import { Box } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: { sm: "6px", lg: "4px" },
        backgroundColor: "white",
        width: "100%",
        backgroundSize: "30rem",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        height: { sm: "5rem", lg: "6rem" },
        overflow: "hidden",
        mt: "5rem",
      }}
    >
      <NavBar />
    </Box>
  );
}
