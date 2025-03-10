import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BehindWelding() {
  const navigate = useNavigate();
  const imageUrl = process.env.PUBLIC_URL + "/images/jakeheadshot.jpg";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { sm: "column", lg: "row" },
        justifyContent: "space-between",
        marginTop: "2rem",
        padding: "1rem",
        paddingBottom: "8rem",
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
            height: { sm: "40rem", lg: "27rem" },

            width: { sm: "45rem", lg: "34rem" },
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "8rem",
            paddingTop: "8rem",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          marginTop: "7rem",
          marginLeft: { sm: "4rem", lg: "2rem" },
          marginRight: { sm: "1rem", lg: "15rem" },
          color: "black",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ color: "black", fontSize: { sm: "4rem", lg: "3rem" } }}
        >
          Welcome to Madsen Made Welding & Fabrication
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ color: "black", fontSize: { sm: "3.75rem", lg: "2.5rem" } }}
        >
          I'm Jake, the owner and lead welder
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "1rem",
            borderTop: "1px solid #ccc",
            fontSize: { sm: "2.5rem", lg: "1.5rem" },
          }}
        >
          With years of experience in the industry, I am dedicated to providing
          the best welding services in Colorado. From custom work to railings
          and new projects, I love bringing ideas to life through metal
          fabrication. My attention to detail and passion for craftsmanship
          ensure that every project is completed with precision and excellence.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "2rem",
            fontSize: { sm: "2.5rem", lg: "1.5rem" },
          }}
        >
          Contact me today to discuss your welding needs and let's create
          something amazing together!
        </Typography>
        <Button
          variant="contained"
          sx={{ fontSize: { sm: "2.5rem", lg: "1rem" } }}
          onClick={() => navigate("/Contact")}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
}
