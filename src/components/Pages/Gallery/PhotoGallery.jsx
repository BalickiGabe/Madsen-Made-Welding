import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import "./PhotoGallery.css";

const PhotoGallery = ({ photos }) => {
  return (
    <Grid container spacing={2}>
      {photos.map((photo, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <div className="photo-container">
            <img src={photo.url} alt={photo.alt} className="photo" />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotoGallery;
