import React from "react";
import { Box, Typography, ListItem, ListItemText } from "@mui/material";
import SecondaryNavBar from "../SecondaryNavBar";
import Footer from "../Footer";

export default function Services() {
  const imageUrl = process.env.PUBLIC_URL + "/images/map.png";
  const jakeWelding = process.env.PUBLIC_URL + "/images/jake%20welding.jpg";

  return (
    <Box>
      <SecondaryNavBar />
      <Box
        sx={{
          background: "#b29e85",
          borderRadius: "3px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        }}
      ></Box>
      {/* Residential */}
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
              backgroundImage: `url(${jakeWelding})`,
              flex: 1,
              backgroundRepeat: "no-repeat",
              height: { sm: "10rem", lg: "15rem" },

              width: { sm: "20rem", lg: "25rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
              marginLeft: "1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: { lg: "9rem", sm: "1rem" },
            marginLeft: { sm: "4rem", lg: "0rem" },
            marginRight: { sm: "1rem", lg: "6rem" },
            color: "black",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "black", borderBottom: "1px solid #ccc" }}
          >
            Residential
          </Typography>
          <Typography
            variant="body"
            gutterBottom
            sx={{
              color: "black",

              fontSize: { sm: "1rem", lg: "1.2rem" },
              marginTop: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Box>
      {/* Commercial */}
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
              backgroundImage: `url(${jakeWelding})`,
              flex: 1,
              backgroundRepeat: "no-repeat",
              height: { sm: "10rem", lg: "15rem" },

              width: { sm: "20rem", lg: "25rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
              marginLeft: "1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: { lg: "9rem", sm: "1rem" },
            marginLeft: { sm: "4rem", lg: "0rem" },
            marginRight: { sm: "1rem", lg: "6rem" },
            color: "black",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "black", borderBottom: "1px solid #ccc" }}
          >
            Commercial
          </Typography>
          <Typography
            variant="body"
            gutterBottom
            sx={{
              color: "black",

              fontSize: { sm: "1rem", lg: "1.2rem" },
              marginTop: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Box>
      {/* Repairs */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-between",
          marginTop: "2rem",
          marginBottom: "2rem",
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
              backgroundImage: `url(${jakeWelding})`,
              flex: 1,
              backgroundRepeat: "no-repeat",
              height: { sm: "10rem", lg: "15rem" },

              width: { sm: "20rem", lg: "25rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
              marginLeft: "1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: { lg: "9rem", sm: "1rem" },
            marginLeft: { sm: "4rem", lg: "0rem" },
            marginRight: { sm: "1rem", lg: "6rem" },
            color: "black",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "black", borderBottom: "1px solid #ccc" }}
          >
            Repairs
          </Typography>
          <Typography
            variant="body"
            gutterBottom
            sx={{
              color: "black",

              fontSize: { sm: "1rem", lg: "1.2rem" },
              marginTop: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Box>
      {/* Transforming Spaces with Madsen Made */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          width: { sm: 600, lg: 1000 },
          margin: "auto",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
          borderRadius: { sm: "6px", lg: "4px" },
          overflow: "hidden",
          marginTop: "5rem",
          bgcolor: "#b29e85",
          color: "White",
          padding: "2rem",
        }}
      >
        <Typography variant="h4">
          Transforming Spaces with Madsen Made
        </Typography>
        <Typography
          variant="body"
          sx={{ fontSize: { sm: "1rem", lg: "1.5rem" }, marginTop: "3rem" }}
        >
          At Madsen Made, we bring your visions of elegant railings and
          structural metalwork to life. As a small family business, we are
          dedicated to making your custom welding projects everything you
          dreamed of. Client satisfaction and exceptional customer service are
          our top priorities. Paired with best-in-class design, high-end
          functionality, and craftsman-quality work, the Madsen Made family is
          the only team you need. Our modern processes will help you create the
          stunning railings you’ve always wanted, and we’ll be here to support
          you every step of the way.
        </Typography>
      </Box>
      {/* Map and service locations */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-between",
          marginTop: "5rem",
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "white",
          borderTop: "4px solid #ccc",
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
              borderRadius: "5%",
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
          <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
            We are proud to serve the Colorado Front Range
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "black", borderBottom: "1px solid #ccc" }}
          >
            From Boulder to Castle Rock and everywhere in between
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: "black" }}>
            Cities and Towns We Serve
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {[
              "Denver Metro",
              "Parker",
              "Highlands Ranch",
              "Littleton",
              "Golden",
              "Boulder",
              "Loveland",
              "Thornton",
              "Brighton",
              "Broomfield",
              "Longmont",
              "Erie",
              "Castle Rock",
              "Roxborough",
              "Aurora",
              "Commerce City",
              "Westminster",
              "Lakewood",
              "Morrison",
            ].map((city) => (
              <ListItem key={city} sx={{ padding: 0 }}>
                <ListItemText primary={city} />
              </ListItem>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
