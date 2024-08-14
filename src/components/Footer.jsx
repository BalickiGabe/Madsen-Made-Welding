import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "32px",
        color: "#b29e85",
        marginTop: "2rem",
        borderRadius: { sm: "6px", lg: "4px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "32px",
          borderTop: "1px solid #ccc",
          paddingTop: "16px",
          color: "black",
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ marginLeft: "3rem" }}>
            madsenmadellc@gmail.com
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "3rem" }}>
            (303) 653-3864
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "3rem" }}>
            Denver, Colorado
          </Typography>
        </Box>
        <Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
              marginRight: "3rem",
            }}
          >
            <Button color="primary">
              <FacebookIcon sx={{ fontSize: "4rem" }} />
            </Button>
            <Button color="primary">
              <InstagramIcon sx={{ fontSize: "4rem" }} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "32px",
          borderTop: "1px solid #ccc",
          paddingTop: "16px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: { sm: ".5rem", lg: "1rem" } }}
        >
          © {year} Madsen Made Welding and Fabrication. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
