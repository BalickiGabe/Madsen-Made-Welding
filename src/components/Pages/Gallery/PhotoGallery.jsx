import React from "react";
import { Box } from "@mui/material";

export default function PhotoGallery({ photos }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "1fr 1fr 1fr",
        },
        gap: "1rem",
        marginTop: "3rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        textAlign: "center",
      }}
    >
      {photos.map((photo, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            height: 0,
            paddingBottom: "75%",
            overflow: "hidden",
            position: "relative",
            gridColumn: {
              xs: "span 1",
              sm: "span 1",
              md: "span 1",
            },
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
