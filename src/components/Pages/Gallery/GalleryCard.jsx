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
          width: { sm: "800px", lg: "700px" },
          height: { sm: "500px", lg: "500px" },
          m: 2,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardMedia component="img" alt={title} height="350rem" image={image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ fontSize: { sm: "4rem", md: "1.9rem", lg: "2rem" } }}
          >
            {title}
          </Typography>
          <Typography
            variant="body"
            color="black"
            sx={{ fontSize: { sm: "15px", md: "1.1rem", lg: "1.3rem" } }}
          >
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}
