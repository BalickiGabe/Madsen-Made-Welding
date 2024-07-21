import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function GalleryCard({ image, title, body }) {
  return (
    <Button sx={{ textAlign: "left" }}>
      <Card
        sx={{
          width: { sm: "800px", lg: "800px" },
          height: { sm: "500px", lg: "600px" },
          boxShadow: 3,
          borderRadius: 2,
          mt: 3,
          backgroundColor: "#a8bfaa",
        }}
      >
        <CardMedia component="img" alt={title} height="450rem" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontSize: { sm: "4rem", md: "1.9rem", lg: "2rem" },
              borderBottom: "1px solid black",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body"
            color="black"
            sx={{
              fontSize: { sm: "15px", md: "1.1rem", lg: "1.2rem" },
              textTransform: "none",
            }}
          >
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
