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
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   - Customer`,
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   - Customer`,
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   - Customer`,
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."   - Customer`,
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
        width: { sm: 600, lg: 1000 },
        margin: "auto",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        borderRadius: { sm: "6px", lg: "4px" },
        overflow: "hidden",
        marginTop: "2rem",
        bgcolor: "#b29e85",
        color: "White",
        padding: "2rem",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "1rem", color: "white" }}>
        TESTIMONIALS
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
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
                }}
              >
                <Typography>{testimonial.text}</Typography>
              </Paper>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
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
  );
}
