// Top navbar component

import React from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"
import FlareIcon from "@material-ui/icons/Flare"
import Brightness3Icon from "@material-ui/icons/Brightness3"
import Grey from "@material-ui/core/colors/grey"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.type === "dark" ? Grey[800] : ""
    },
    title: {
      flexGrow: 1
    },
    iconContainer: {
      "&:hover": {
        cursor: "pointer"
      }
    }
  })
)

interface INavBarProps {
  toggleTheme: () => void
}

const NavBar: React.FC<INavBarProps> = ({ toggleTheme }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isLightTheme: boolean = theme.palette.type === "light" ? true : false
  
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Search Wikipedia
          </Typography>

          <Tooltip title={`Toogle theme to ${isLightTheme ? "Dark" : "Light"}`}>
            <span className={classes.iconContainer} onClick={toggleTheme}>
              {!isLightTheme ? <FlareIcon /> : <Brightness3Icon />}
            </span>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default NavBar
