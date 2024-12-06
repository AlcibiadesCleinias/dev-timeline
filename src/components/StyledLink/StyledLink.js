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

interface StyledLinkProps {
  url: string;
  text: string;
  [key: string]: any;
}

const StyledLink: React.FC<StyledLinkProps> = ({ url, text, ...props }) => {
  return (
    <CustomLink
      onClick={() => window.open(url, "_blank")}
      {...props}
    >
      {text}
    </CustomLink>
  );
};

export default StyledLink; 