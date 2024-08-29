import React from "react";
import { Box, Typography, Button } from "@mui/material";
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
          <Typography
            variant="body1"
            sx={{
              marginLeft: { sm: "1rem", lg: "3rem" },
              fontSize: { sm: "2rem", lg: "1.5rem" },
            }}
          >
            madsenmadellc@gmail.com
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginLeft: { sm: "1rem", lg: "3rem" },
              fontSize: { sm: "2rem", lg: "1.5rem" },
            }}
          >
            Jake: (720) 281-4879
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginLeft: { sm: "1rem", lg: "3rem" },
              fontSize: { sm: "2rem", lg: "1.5rem" },
            }}
          >
            Alex: (303) 653-3864
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginLeft: { sm: "1rem", lg: "3rem" },
              fontSize: { sm: "2rem", lg: "1.5rem" },
            }}
          >
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
            <Button
              color="primary"
              href="https://www.facebook.com/Madsenmadellc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ fontSize: { sm: "3rem", lg: "4rem" } }} />
            </Button>
            <Button
              color="primary"
              href="https://www.instagram.com/madsen_made/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ fontSize: { sm: "3rem", lg: "4rem" } }} />
            </Button>
            <Button
              color="primary"
              href="https://www.thumbtack.com/co/denver/metal-fabricators/madsen-made-welding-fabrication/service/463516994295357449?utm_medium=web&utm_source=txt&surface=sp&referrer_pk=411268096510590985"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: { sm: "2rem", lg: "2.5rem" } }}
            >
              Thumbtack
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
          sx={{ fontSize: { sm: "1rem", lg: "1rem" } }}
        >
          © {year} Madsen Made Welding and Fabrication. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
