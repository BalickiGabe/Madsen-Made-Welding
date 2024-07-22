import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

import Header from "../Header";
import Footer from "../Footer";

export default function About() {
  const Family = process.env.PUBLIC_URL + "/images/Family.jpg";
  const Jake = process.env.PUBLIC_URL + "/images/Jake.jpg";
  const Alex = process.env.PUBLIC_URL + "/images/Alex.jpg";
  const Brian = process.env.PUBLIC_URL + "/images/Brian.jpg";
  const Louie = process.env.PUBLIC_URL + "/images/Louie.jpg";

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          justifyContent: "space-between",
          marginTop: "2rem",
          padding: "1rem",
          paddingBottom: "3rem",

          backgroundColor: "#a8bfaa",
          borderRadius: { sm: "6px", lg: "4px" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            marginLeft: { sm: "4rem", lg: "3rem" },
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${Family})`,
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
        <Box
          sx={{
            flex: 1,
            marginTop: "2rem",
            marginRight: { sm: "4rem", lg: "10rem" },
            marginLeft: { sm: "3rem", lg: "0rem" },
            color: "black",
          }}
        >
          {/* <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
            Meet Our Family
          </Typography> */}
          <Typography
            variant="body1"
            sx={{
              marginBottom: "2rem",
              // borderTop: "1px solid #ccc",
            }}
          >
            We are Jake and Alex Kern, proud owners of Madsen Made Welding &
            Fabrication. Our journey began in 2021 with the dream of gaining
            financial independence to start a family. With the incredible
            support of our customers, we went full-time with our business and
            welcomed our first baby boy, Finn, into the world. We now have a
            one-year-old and are excitedly expecting another child next year.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "2rem",
            }}
          >
            In our free time, we are passionate hockey fans and avid supporters
            of the Colorado Avalanche. Our home and business are rooted in the
            teachings of Jesus Christ and His gospel, which guide our values and
            work ethic.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "2rem",
            }}
          >
            We love the opportunity to meet new people and create stunning
            railings that stand the test of time. Thank you for being a part of
            our journey and helping us turn our dreams into reality.
          </Typography>
        </Box>
      </Box>
      {/* break */}

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p={2}
        sx={{ backgroundColor: "#a8bfaa" }}
      >
        <Card sx={{ marginBottom: ".8rem", maxWidth: "50rem" }}>
          <CardMedia component="img" height="700rem" image={Jake} />
          <CardContent>
            <Typography
              variant="body1"
              color="Black"
              sx={{
                marginLeft: "2rem",
                marginBottom: "3rem",
                marginRight: "2rem",
              }}
            >
              Jake is a 2019 graduate of Triangle Tech College in Pennsylvania,
              holding a Specialized Technology degree in Welding. His expertise
              has been honed through working with exemplary contractors across
              Pennsylvania, Washington, and Colorado. He is passionate about
              creating beautiful, lasting railings and meeting new people.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: ".8rem", maxWidth: "50rem" }}>
          <CardMedia component="img" height="700rem" image={Alex} />
          <CardContent>
            <Typography
              variant="body1"
              color="Black"
              sx={{
                marginLeft: "2rem",
                marginBottom: "3rem",
                marginRight: "2rem",
              }}
            >
              Alex, a Colorado native, draws on her legal education and
              experience to manage our business operations. With a keen eye for
              interior design, she enjoys collaborating with customers to bring
              new and beautiful railing ideas to life. Alex also manages the
              administrative side of our business, ensuring everything runs
              smoothly.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: ".8rem", maxWidth: "50rem" }}>
          <CardMedia component="img" height="700rem" image={Brian} />
          <CardContent>
            <Typography
              variant="body1"
              color="Black"
              sx={{
                marginLeft: "2rem",
                marginBottom: "3rem",
                marginRight: "2rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ marginBottom: ".8rem", maxWidth: "50rem" }}>
          <CardMedia component="img" height="700rem" image={Louie} />
          <CardContent>
            <Typography
              variant="body1"
              color="Black"
              sx={{
                marginLeft: "2rem",
                marginBottom: "3rem",
                marginRight: "2rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}
