// Top navbar component

import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1
    }
  })
)

interface INavBarProps {
  toggleTheme: () => void
}

const NavBar: React.FC<INavBarProps> = ({ toggleTheme }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
          >
            Search Wikipedia
          </Typography>
          <Button variant="outlined" onClick={ toggleTheme }>Toggle Theme</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default NavBar
