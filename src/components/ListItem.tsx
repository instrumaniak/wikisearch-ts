/**
 *  ListItem Component
 *  Display individual search link card
 */

import React from "react"
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grey from "@material-ui/core/colors/grey"
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '&:hover': {
        //backgroundColor: theme.palette.action.hover //Grey[200]
        backgroundColor: theme.palette.type === "light" ? Grey[200] : Grey[700]
      }
    },
    title: {
      marginBottom: theme.spacing(1)
    },
    link: {
      '&:hover': {
        textDecoration: 'none'
      }
    }
  })
)

interface IListItemProps {
  link: string
  title: string
  info: string
}

const ListItem: React.FC<IListItemProps> = ({
  link,
  title,
  info
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Link
        className={classes.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
      >
        <Typography
          variant="h6"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant="body1">
          {info}
        </Typography>
      </Link>
    </Paper>
  )
}

export default ListItem