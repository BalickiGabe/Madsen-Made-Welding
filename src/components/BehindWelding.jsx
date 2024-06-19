import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function BehindWelding() {
  const imageUrl = process.env.PUBLIC_URL + "/images/jakeheadshot.jpg";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", lg: "row" },
        justifyContent: "space-between",
        marginTop: "2rem",
        padding: "1rem",
        paddingBottom: "3rem",
        backgroundColor: "white",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        borderRadius: { sm: "6px", lg: "4px" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginLeft: { sm: "4rem", lg: "1rem" },
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${imageUrl})`,
            flex: 1,
            backgroundRepeat: "no-repeat",
            height: { sm: "20rem", lg: "27rem" },
            borderRadius: "50%",
            width: { sm: "27rem", lg: "34rem" },
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "3rem",
            paddingTop: "8rem",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          marginTop: "7rem",
          marginLeft: { sm: "4rem", lg: "2rem" },
          marginRight: { sm: "1rem", lg: "6rem" },
          color: "black",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: "black" }}>
          Welcome to Madsen Made Welding & Fabrication! I'm Jake, the owner and
          lead welder
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: "2rem", borderTop: "1px solid #ccc" }}
        >
          With years of experience in the industry, I am dedicated to providing
          top-notch welding services in the Denver Metro area. From custom work
          to railings and new projects, I love bringing ideas to life through
          metal fabrication. My attention to detail and passion for
          craftsmanship ensure that every project is completed with precision
          and excellence. Contact me today to discuss your welding needs and
          let's create something amazing together.
        </Typography>
        <Button variant="contained">Contact</Button>
      </Box>
    </Box>
  );
}
