import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const testimonials = [
  {
    text: `"We just had Jake and his team replace our old stair rails with new, custom made rails that are absolutely beautiful. He was really good about checking with us to make sure that the colors and configuration were correct. And they did the whole job themselves, no need to bring in any other contractors to do drywall repairs or painting."   - Phil`,
  },
  {
    text: `"We recently had a stair railing welded and installed, and we couldn't be happier with both the final product and the entire process. From the initial consultation to the completion of the project, everything was smooth and stress-free. Jake was professional, punctual, and highly skilled. The railing has truly transformed the look of our staircase. We highly recommend their services. Thank you for a job well done!"   - Jeff`,
  },
  {
    text: `"Jake and Alex were great to work with! I have a remodel project that is not that straightforward and he was so patient and willing to do whatever necessary in a timely and professional manner. I would definitely use him again and highly recommend them!!"   - Donna`,
  },
  {
    text: `"This guy does amazing work. Jake’s designs and craftsmanship are pure perfection!  In addition, they are amazing to work with!  I highly recommend!"   - Jami`,
  },
];

export default function Testimonial() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Center vertically
        height: { sm: "42rem", lg: "30rem" },
        bgcolor: "#b29e85",
        color: "white",
      }}
    >
      <Box
        sx={{
          maxWidth: "70rem",
          margin: "auto",
          alignItems: "center",
          padding: "2rem",

          overflow: "hidden",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginBottom: "1rem",
            textAlign: "center",
            fontSize: { sm: "3rem", lg: "2rem" },
          }}
        >
          Testimonials
        </Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5500}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Paper
                  elevation={0}
                  sx={{
                    padding: "1rem",
                    bgcolor: "transparent",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { sm: "1rem", lg: "1.5rem" } }}
                  >
                    {testimonial.text}
                  </Typography>
                </Paper>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          {Array.from({ length: maxSteps }, (_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: activeStep === index ? "tan" : "#fff",
                margin: "0 4px",
                cursor: "pointer",
              }}
              onClick={() => handleStepChange(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
