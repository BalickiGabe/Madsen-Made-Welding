import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Buttons({ title, path, onClickAction }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onClickAction) {
      onClickAction();
    }
    if (path) {
      navigate(path);
    }
  };

  return <Button onClick={handleButtonClick}>{title}</Button>;
}
