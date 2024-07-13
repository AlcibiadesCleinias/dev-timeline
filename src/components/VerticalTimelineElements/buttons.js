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
  return (
    <Box sx={{ "& > button": { m: 0.1 } }}>
      {stack.map((tag, index) => {
        return (
          <Tooltip title={tag} arrow key={index}>
            <BootstrapButton key="1" size="small">
              {serviceNameToIcon[tag] ?? tag}
            </BootstrapButton>
          </Tooltip>
        );
      })}
    </Box>
  );
}
