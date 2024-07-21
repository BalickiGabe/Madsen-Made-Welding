import React from "react";
import { Box, Typography, ListItem, ListItemText } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

export default function Services() {
  const imageUrl = process.env.PUBLIC_URL + "/images/map.png";
  const residential = process.env.PUBLIC_URL + "/images/Residential.jpeg";
  const commercial = process.env.PUBLIC_URL + "/images/Commercial.jpeg";
  const repairs = process.env.PUBLIC_URL + "/images/Repairs.jpeg";

  return (
    <Box>
      <Header />
      <Box
        sx={{
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
          backgroundColor: "#a8bfaa",
          border: "1px solid #ccc",
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
              backgroundImage: `url(${residential})`,
              flex: 1,
              backgroundRepeat: "no-repeat",
              height: { sm: "10rem", lg: "20rem" },

              width: { sm: "20rem", lg: "30rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: { lg: "2rem", sm: "1rem" },
            marginLeft: { sm: "4rem", lg: "0rem" },
            marginRight: { sm: "1rem", lg: "6rem" },
            color: "black",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "black",
              borderBottom: "1px solid #ccc",
              fontSize: { sm: "2.5rem", lg: "3rem" },
            }}
          >
            Residential
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "black",

              fontSize: { xs: "1.7rem", sm: "1.7rem", lg: "1.5rem" },
              marginTop: "3rem",
            }}
          >
            At Madsen Made Welding & Fabrication, we specialize in creating
            beautiful and durable residential railings that enhance the safety
            and aesthetic appeal of your home. Whether you're looking for modern
            designs or classic styles, our expert craftsmanship ensures that
            each railing is tailored to your specific needs and preferences.
            With a commitment to quality and attention to detail, we transform
            your vision into reality, providing railings that not only meet but
            exceed your expectations.
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
          backgroundColor: "#a8bfaa",
          border: "1px solid #ccc",
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
              backgroundImage: `url(${commercial})`,
              flex: 1,
              backgroundRepeat: "no-repeat",
              height: { sm: "10rem", lg: "20rem" },

              width: { sm: "20rem", lg: "30rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: { lg: "2rem", sm: "1rem" },
            marginLeft: { sm: "4rem", lg: "0rem" },
            marginRight: { sm: "1rem", lg: "6rem" },
            color: "black",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "black",
              borderBottom: "1px solid #ccc",
              fontSize: { sm: "2.5rem", lg: "3rem" },
            }}
          >
            Commercial Railings and Welding Services
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "black",

              fontSize: { xs: "1.7rem", sm: "1.7rem", lg: "1.5rem" },
              marginTop: "3rem",
            }}
          >
            At Madsen Made Welding & Fabrication, we offer comprehensive welding
            solutions for commercial projects, including custom railings,
            structural platforms, and various other welding needs. Our expertise
            spans across diverse industries, ensuring that each project is
            completed with precision, durability, and safety in mind. From
            sleek, modern railings to robust structural platforms, our skilled
            team is dedicated to delivering exceptional results that meet the
            unique demands of your business. Trust us for all your commercial
            welding needs, and experience the quality and reliability that
            define Madsen Made.
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
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "#a8bfaa",
          border: "1px solid #ccc",
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
              backgroundImage: `url(${repairs})`,
              flex: 1,
              backgroundRepeat: "no-repeat",
              height: { sm: "10rem", lg: "20rem" },

              width: { sm: "20rem", lg: "30rem" },
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "3rem",
              paddingTop: "8rem",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: { lg: "2rem", sm: "1rem" },
            marginLeft: { sm: "4rem", lg: "0rem" },
            marginRight: { sm: "1rem", lg: "6rem" },
            color: "black",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "black",
              borderBottom: "1px solid #ccc",
              fontSize: { sm: "2.5rem", lg: "3rem" },
            }}
          >
            Repairs and Custom Requests
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "black",

              fontSize: { xs: "1.7rem", sm: "1.7rem", lg: "1.5rem" },
              marginTop: "3rem",
            }}
          >
            At Madsen Made Welding & Fabrication, we specialize in both repairs
            and custom welding requests to meet your specific needs. Whether
            it's restoring damaged railings or crafting unique custom pieces,
            our skilled welders ensure meticulous craftsmanship and attention to
            detail in every project. We pride ourselves on delivering reliable
            solutions that restore functionality and enhance the aesthetic
            appeal of your space. Trust us with your repair and custom welding
            needs, and let us bring your ideas to life with quality and
            expertise.
          </Typography>
        </Box>
      </Box>
      {/* Transforming Spaces with Madsen Made */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          margin: "auto",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
          borderRadius: { sm: "6px", lg: "4px" },
          overflow: "hidden",
          bgcolor: "#b29e85",
          color: "White",
          padding: "2rem",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginLeft: "2rem", textAlign: "Center" }}
        >
          Other services offered
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
            marginTop: "3rem",
            marginLeft: "6rem",
            textAlign: "Center",
          }}
        >
          {[
            "On-site Welding & Fabrication",
            "Interior & Exterior Stair Railings",
            "Safety/ADA Railings",
            "Steel Cable Railings",
            "Baby & Pet Gates",
            "Structural Platforms",
            "Commercial Railings & Custom Projects ",
            "Certified Welding",
            "All Custom Welding & Fabrication",
            "Repair Work",
            "Food Industry Equipment ",
            "Decorative Metal",
            "Stainless Steel ",
            "Tig Welding",
            "Aluminum Welding",
            "and more!",
          ].map((city) => (
            <ListItem key={city} sx={{ padding: 0 }}>
              <ListItemText primary={city} />
            </ListItem>
          ))}
        </Box>
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
          <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
            We are proud to serve the Colorado Front Range
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "black", borderBottom: "1px solid #ccc" }}
          >
            From Boulder to Castle Rock and everywhere in between
          </Typography>
          <Typography variant="h3" gutterBottom sx={{ color: "black" }}>
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
