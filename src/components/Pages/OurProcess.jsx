import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import SecondaryNavBar from "../SecondaryNavBar";
import Footer from "../Footer";

export default function OurProcess() {
  const steps = [
    {
      title: "Get Inspired!",
      description: `If you're tired of your outdated wooden railings and ready for an upgrade, it's time to tackle the project. You've heard from neighbors, friends, and online reviews that Madsen Made is the go-to for custom metalwork. You've done your research – read the glowing reviews and explored our stunning gallary. Then, you make the call to transform your home with our exquisite, handcrafted metal railings.`,
    },
    {
      title: "Free Online Consultation",
      description: `Before starting a project, you might wonder "How much will it cost?". The CCM Team will get in touch with you and ask questions to provide you with an approximate cost.`,
    },
    {
      title: "Transforming Your Vision into a Design Reality",
      description: `As a team, we come together to dissect the site. During this part, it's finally time for you to put your designer hat on and pick the design that you like. This is when you pick the material, style, color, and more.`,
    },
    {
      title: "Review Estimate",
      description: `Based on everything that was discussed, a detailed estimate will be written that reflects that. Finally, it's time to sign and get started.`,
    },
    {
      title: "CCM Getting Started",
      description: `Our team will review with the material that you have chosen and we'll get to work. Throughout the process, we'll keep you informed and make sure that everything is going smoothly.`,
    },
  ];
  return (
    <Box>
      <SecondaryNavBar />
      <Box
        sx={{
          color: "black",
          minHeight: "100vh",
          py: 4,
          backgroundColor: "#e8e8dc",
          paddingBottom: "10rem",
        }}
      >
        <Container>
          <Typography
            variant="h2"
            align="left"
            gutterBottom
            sx={{ borderBottom: "1px solid #ccc" }}
          >
            Our Process
          </Typography>

          <Typography
            variant="h6"
            align="left"
            paragraph
            sx={{ marginBottom: "2rem" }}
          >
            We know that having construction work done in your home can feel
            overwhelming, and we want to assure you that we're here to make the
            process as smooth and stress-free as possible. We genuinely care
            about your experience, so we've developed a clear, five-step
            approach to ensure everything goes seamlessly.
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} key={index}>
                <Paper
                  sx={{ p: 3, backgroundColor: "#b29e85", color: "white" }}
                >
                  <Typography variant="h5" gutterBottom>
                    {index + 1} | {step.title}
                  </Typography>
                  <Typography variant="h6">{step.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
