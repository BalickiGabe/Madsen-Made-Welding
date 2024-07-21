import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

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
          <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
            Info@MadsenMade.com
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
            (123) 456-7890
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
            Denver, Colorado
          </Typography>
        </Box>
        <Box>
          <Typography>Sign up for our newsletter</Typography>
          <Box
            component="form"
            sx={{ display: "flex", alignItems: "center", marginTop: "8px" }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter email address"
              size="small"
              sx={{
                marginRight: "8px",
                backgroundColor: "#fff",
                borderRadius: "4px",
              }}
            />
            <Button variant="contained" color="primary">
              SUBSCRIBE
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
        <Typography variant="body3">
          © {year} Madsen Made Welding and Fabrication. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
