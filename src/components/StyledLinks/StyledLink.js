import React from 'react';
import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.info.dark,
  textDecorationColor: theme.palette.info.dark,
  '&:hover': {
    color: theme.palette.info.light,
    textDecorationColor: theme.palette.info.light,
    cursor: 'pointer'
  }
}));

const StyledLink = ({ url, text, ...props }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <CustomLink
      onClick={handleClick}
      data-umami-event="Styled Link Click"
      data-umami-event-url={url}
      data-umami-event-text={text}
      {...props}
    >
      {text}
    </CustomLink>
  );
};

export default StyledLink; 