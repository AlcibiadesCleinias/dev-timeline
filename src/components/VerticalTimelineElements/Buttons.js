import React from 'react';
import { Box, Button, styled, Tooltip } from "@mui/material";
import { serviceNameToIcon } from "../ServiceIcons/mapping";

export function ExternalLinkButton(props) {
  const { url, children } = props;
  return (
    <Button
      style={{ fontFamily: "Play" }}
      target="_blank"
      href={url}
      variant={"contained"}
      color={"info"}
      data-umami-event="External Link Click"
      data-umami-event-url={url}
      data-umami-event-name={children}
    >
      {children}
    </Button>
  );
}

const BootstrapButton = styled(Button)({
  textTransform: "none",
  margin: 0,
  minWidth: 0,
});

export function StackIcons({ stack }) {
  stack.sort();
  return (
    <Box sx={{ "& > button": { m: 0.1 } }}>
      {stack.map((tag, index) => {
        return (
          <Tooltip title={tag} arrow key={index}>
            <BootstrapButton 
              size="small"
              data-umami-event="Stack Icon Click"
              data-umami-event-technology={tag}
            >
              {serviceNameToIcon[tag] ?? tag}
            </BootstrapButton>
          </Tooltip>
        );
      })}
    </Box>
  );
}
