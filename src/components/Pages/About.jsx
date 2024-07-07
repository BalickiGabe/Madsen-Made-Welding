import React from "react";
import { Box, Typography } from "@mui/material";
import SecondaryNavBar from "../SecondaryNavBar";
import Footer from "../Footer";

export default function About() {
  const imageUrl = process.env.PUBLIC_URL + "/images/family.jpeg";
  return (
    <Box>
      <SecondaryNavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-between",
          marginTop: "2rem",
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "#e8e8dc",
          borderRadius: { sm: "6px", lg: "4px" },
          borderBottom: "4px solid #ccc",
        }}
      >
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
            Meet Our Family
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "2rem", borderTop: "1px solid #ccc" }}
          >
            We started Madsen Made in 2021, hoping to be able to gain the
            financial independence to start a family. With the help of our
            customers, we were able to go full-time with our business and
            welcome our first baby boy, Finn, into the world!
          </Typography>
        </Box>
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
              borderRadius: ".5%",
              width: { sm: "27rem", lg: "34rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
            }}
          />
        </Box>
      </Box>
      {/* break */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-between",
          marginTop: "2rem",
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "white",
          borderRadius: { sm: "6px", lg: "4px" },
          borderBottom: "4px solid #ccc",
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
              height: { sm: "13rem", lg: "20rem" },
              borderRadius: "50%",
              width: { sm: "20rem", lg: "28rem" },
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
            Jake
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "2rem", borderTop: "1px solid #ccc" }}
          >
            Jake graduated in 2019 from Triangle Tech College in PA, with a
            Specialized Technology degree in Welding. Since then, he has been
            growing his expertise while working for explementary contractors in
            Pennsylvania, Washington and Colorado.
          </Typography>
        </Box>
      </Box>

      {/* break */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-between",
          marginTop: "2rem",
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "white",
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
              height: { sm: "13rem", lg: "20rem" },
              borderRadius: "50%",
              width: { sm: "20rem", lg: "28rem" },
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
            Alex
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginBottom: "2rem", borderTop: "1px solid #ccc" }}
          >
            Alex, a native to Colorado, graduated with her Paralegal Degree, and
            works for a well-known law firm in the Denver area. She loves
            working with our customers and taking care of the administrative
            side of our business.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
