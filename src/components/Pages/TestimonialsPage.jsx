import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import Footer from "../Footer";
import Header from "../Header";

const testimonials = [
  {
    text: "10/10 recommend hiring Jake for whatever your welding needs may be. We had a great experience having him and his team fabricate an entirely new railing for our indoor stairs. He provided a detailed bid upfront, was able to accommodate our timeline, prepared a lot of the product off-site and took 3 days for install, made certain the railing was to our standards and up to code. He made necessary adjustments when I asked him to, and he was flexible to help our other subs use the stairs when needed. Really great communication and beautiful work!",
    author: "Jennifer S.",
  },
  {
    text: "We just had Jake and his team replace our old stair rails with new, custom made rails that are absolutely beautiful. He was really good about checking with us to make sure that the colors and configuration were correct. And they did the whole job themselves, no need to bring in any other contractors to do drywall repairs or painting.",
    author: "Phil M.",
  },
  {
    text: "We recently had a stair railing welded and installed, and we couldn't be happier with both the final product and the entire process. From the initial consultation to the completion of the project, everything was smooth and stress-free. Jake was professional, punctual, and highly skilled. The railing has truly transformed the look of our staircase. We highly recommend their services. Thank you for a job well done!",
    author: "Jeff S.",
  },
  {
    text: "My porch railing looks great! Thank you Madsen Made!!!!",
    author: "Sara R.",
  },
  {
    text: "Jake and Alex were great to work with! I have a remodel project that is not that straightforward and he was so patient and willing to do whatever necessary in a timely and professional manner. I would definitely use him again and highly recommend them!!",
    author: "Donna M.",
  },
  {
    text: "This guy does amazing work. Jake’s designs and craftsmanship are pure perfection! In addition, they are amazing to work with! I highly recommend!",
    author: "Jami N.",
  },
  {
    text: "I cannot say enough how much I recommend their work! Completely professional and reasonably priced, the stair railings they installed for us are a dream come true!",
    author: "Allie P.",
  },
  {
    text: "Our deck railing looks awesome, quick install. Easy process, with great suggestions by Jake to make it better",
    author: "Bret R.",
  },
  {
    text: "Jake did a great job on our gate. He matched the design to exactly what we wanted and what was already installed. He was great with communication and on point. Thank you so much.",
    author: "Alissa J.",
  },
  {
    text: "I hired Jake to fix my fence gate…seems like his solution will do the trick. His communication was great and I recommend giving him an opportunity.",
    author: "Leslie G.",
  },
  {
    text: "Jake did an awesome job on our custom railings. He was awesome at communicating through the entire process and let us know when there were some delays to help us plan. He is very detailed in his fabrication and installation - and it shows!",
    author: "Dylan M.",
  },
  {
    text: "Jake did a great job with creating and installing new cable railings for our home. I highly recommend him and will be using him for future projects. He was able to get the look we wanted at a great value. In addition, he created two door handles for our barn doors.",
    author: "Bryan F.",
  },
];

export default function TestimonialsPage() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          padding: "1rem",
          paddingBottom: "3rem",
          backgroundColor: "#b29e85",
          borderRadius: { sm: "6px", lg: "4px" },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            mx: { sm: "4rem", lg: "6rem" },
            my: { sm: "1rem", lg: "5rem" },
          }}
        >
          <Typography
            variant="Body1"
            gutterBottom
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { sm: "3rem", lg: "3.2rem" },
            }}
          >
            See what our happy customers are saying about our craftsmanship and
            dedication to quality!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={8}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TestimonialCard
                text={testimonial.text}
                reviewer={testimonial.author}
                style={{
                  flex: "1",
                  maxWidth: "400px",
                  width: "100%",
                  minHeight: "200px",
                }}
              />
            </Grid>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
