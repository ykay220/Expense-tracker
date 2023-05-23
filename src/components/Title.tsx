import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Title = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Title;
