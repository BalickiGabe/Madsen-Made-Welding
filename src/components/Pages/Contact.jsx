import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

export default function Contact() {
  return (
    <Box>
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "white",
          minHeight: "80vh",
        }}
      >
        <iframe
          src="https://us10.list-manage.com/contact-form?u=c8f8099a1cf8054c527a0a8a9&form_id=56feaa4c7fe7d0aa5713dac69370e5da"
          style={{
            width: "100%",

            height: "85rem",
            border: "none",
            borderRadius: "10px",
          }}
          title="Contact Form"
        />
      </Box>

      <Footer />
    </Box>
  );
}
