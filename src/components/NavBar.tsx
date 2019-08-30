// Top navbar component

import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const NavBar: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Search Wikipedia</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default NavBar
