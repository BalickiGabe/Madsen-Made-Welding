import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils-react-18-fix";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Ornamental Railing Pickets",
    imgPath: process.env.PUBLIC_URL + "/images/homeRailing.png",
  },
  {
    label: "Before & After",
    imgPath: process.env.PUBLIC_URL + "/images/homeRailing2.png",
  },
  {
    label: "Wood Top Railings",
    imgPath: process.env.PUBLIC_URL + "/images/homeRailing3.jpeg",
  },
  {
    label: "Custom Styles for You",
    imgPath: process.env.PUBLIC_URL + "/images/homeRailing4.png",
  },
];

export default function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        width: { sm: 800, lg: 600 },
        margin: "auto",
        overflow: "hidden",
        marginTop: "2rem",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography
          sx={{ fontSize: { sm: "2rem", lg: "1.5rem" }, color: "#b29e85" }}
        >
          {images[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { sm: 600, lg: 500 },
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}
