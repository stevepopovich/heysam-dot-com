import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export function SamHomeAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">
                👋 Hey Sam!
            </Typography>
            </Toolbar>
        </AppBar>
    )
}