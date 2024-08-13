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
        maxWidth: "100%",
        minWidth: "25rem",
        margin: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginBottom: "0.5rem",
          fontStyle: "italic",
          fontSize: { xs: "1rem", sm: "1.25rem" },
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
