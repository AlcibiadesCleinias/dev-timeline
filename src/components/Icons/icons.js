import React from "react";
import EducationIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const iconStyle = { color: '#ffffff' };

export function EducationIconComponent(props) {
    return (
        <EducationIcon style={iconStyle} {...props} />
    );
}

export function WorkIconComponent(props) {
    return (
        <WorkIcon style={iconStyle} {...props} />
    );
}

export function ProjectIconComponent(props) {
    return (
        <DashboardIcon style={iconStyle} {...props} />
    );
}

export function PrizeIconComponent(props) {
    return (
        <EmojiEventsIcon style={iconStyle} {...props} />
    );
}