import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";
import Gallery from "./components/Pages/Gallery/Gallery";
import About from "./components/Pages/About";
import CableRailing from "./components/Pages/Gallery/CableRailing";
import Commercial from "./components/Pages/Gallery/Commercial";
import CustomProjects from "./components/Pages/Gallery/CustomProjects";
import Gates from "./components/Pages/Gallery/Gates";
import Ornamental from "./components/Pages/Gallery/Ornamental";
import OutdoorRailing from "./components/Pages/Gallery/OutdoorRailing";
import SteelRailing from "./components/Pages/Gallery/SteelRailing";
import SteelWoodRail from "./components/Pages/Gallery/SteelWoodRail";

import OurProcess from "./components/Pages/OurProcess";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Services",
    element: <Services />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/OurProcess",
    element: <OurProcess />,
    errorElement: <div>404 Not Found</div>,
  },

  {
    path: "/About",
    element: <About />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/CableRailings",
    element: <CableRailing />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Commercial",
    element: <Commercial />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Custom-Projects",
    element: <CustomProjects />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Gates",
    element: <Gates />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Ornamental",
    element: <Ornamental />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Outdoor-Railings",
    element: <OutdoorRailing />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Steel-Railings",
    element: <SteelRailing />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Wood-and-Steel",
    element: <SteelWoodRail />,
    errorElement: <div>404 Not Found</div>,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1.5rem",
      fontWeight: 500,
      letterSpacing: ".5px",
    },
    body2: {
      fontSize: "1.3rem",
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#b29e85", //beige
      dark: "Tan", //dark background
      contrastText: "#fff",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
