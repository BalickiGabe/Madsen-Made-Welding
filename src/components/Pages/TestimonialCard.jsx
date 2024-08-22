import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function TestimonialCard({ text, reviewer }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: "1rem", sm: "2rem" },
        bgcolor: "#f9f9f9",
        textAlign: "center",
        borderRadius: "8px",
        maxWidth: "85%",
        minWidth: "85%",
        margin: "2rem",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginBottom: "0.5rem",
          fontStyle: "italic",
          fontSize: { sm: "1rem" },
          marginLeft: { sm: "0rem", lg: "10rem" },
          marginRight: { sm: "0rem", lg: "10rem" },
        }}
      >
        &ldquo;{text}&rdquo;
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          marginTop: "1rem",
          fontSize: { xs: "0.875rem", sm: "1rem" },
        }}
      >
        {reviewer}
      </Typography>
    </Paper>
  );
}
