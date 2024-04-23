import { Box, ButtonGroup, Button } from "@mui/material";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>About</Button>
        <Button>Services</Button>
        <Button>Gallery</Button>
        <Button>Contact</Button>
        <Button>Our Process</Button>
      </ButtonGroup>
    </Box>
  );
}
