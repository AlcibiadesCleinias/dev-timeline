import {Button} from "@mui/material";

export function ExternalLinkButton (props) {
    const { url, children } = props
    return (
        <Button style={{ fontFamily: 'Play' }} target="_blank" href={url} variant={"contained"}>{children}</Button>
    )
}