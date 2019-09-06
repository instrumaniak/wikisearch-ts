import React, { useState, useEffect } from "react"
import _ from "lodash"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import LinearProgress from "@material-ui/core/LinearProgress"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { StylesProvider } from "@material-ui/styles"
import SearchIcon from "@material-ui/icons/Search"
import { ThemeProvider } from "styled-components"

import ListGroup from "./ListGroup"
import NavBar from "./NavBar"
import { Typography } from "@material-ui/core"

type ThemeType = "light" | "dark"

const App: React.FC = () => {
  const [input, setInput] = useState<string>("") // search text input
  const [results, setResults] = useState<any[]>([]) // results data from API
  const [isLoading, setIsLoading] = useState<boolean>(false) // show loading bar
  const [isError, setIsError] = useState<boolean>(false) // Error for text input

  const getLocalTheme = (): ThemeType =>
    (window.localStorage.getItem("theme") || "light") as ThemeType
  const [theme, setTheme] = useState<ThemeType>(getLocalTheme) // set theme: light / dark
  const buttonVariant = theme === "light" ? "outlined" : "contained"

  const toggleTheme = () => {
    let newTheme: ThemeType = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleKeys = (kinput: React.KeyboardEvent<HTMLInputElement>) => {
    if (kinput.key === "Enter") {
      getResults()
    }
    if (kinput.key === "Escape") {
      clear()
    }
  }

  const clear = () => {
    setInput("")
    setResults([])
    setIsError(false)
  }

  const getResults = async () => {
    setIsLoading(false)
    const URL =
      "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="

    if (input.trim().length > 0) {
      setIsLoading(true)
      const res = await fetch(URL + input)
      const json = await res.json()
      const data = _.zip(json[1], json[2], json[3]).map(i =>
        _.zipObject(["title", "info", "link"], i)
      )

      setResults(data)
      setIsLoading(false)
    } else {
      setIsError(true)
    }
  }

  const muiTheme = createMuiTheme({
    palette: {
      type: theme
    }
  })

  // save theme settings for restoring after page refresh
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <>
            <CssBaseline />
            {isLoading && <LinearProgress style={{ zIndex: 2000 }} />}
            <NavBar toggleTheme={toggleTheme} />

            <div className="wiki-box">
              <TextField
                label="What do you want to search?..."
                value={input}
                onChange={handleInput}
                onKeyUp={handleKeys}
                fullWidth
                error={isError}
              />

              <Typography
                display="block"
                color={isError ? "error" : "textPrimary"}
                variant="caption"
              >
                {isError ? (
                  "* Search keyword must not be empty."
                ) : (
                  <span>&nbsp;</span>
                )}
              </Typography>

              <div className="wiki-btns">
                <Button
                  variant={buttonVariant}
                  color="secondary"
                  onClick={clear}
                >
                  Clear
                </Button>{" "}
                <Button
                  variant={buttonVariant}
                  onClick={() =>
                    window.open("https://en.wikipedia.org/wiki/Special:Random")
                  }
                >
                  Random
                </Button>{" "}
                <Button
                  variant={buttonVariant}
                  color="primary"
                  onClick={getResults}
                >
                  <SearchIcon fontSize="small" />
                  &nbsp; Search
                </Button>
              </div>

              <ListGroup results={results} />
            </div>
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
