import { styled } from "@mui/material/styles";

export const StyledHashTag = styled('span')(({ theme }) => ({
  color: theme.palette.info.dark,
  '&:hover': {
    color: theme.palette.info.light,
    cursor: 'pointer'
  }
})); 