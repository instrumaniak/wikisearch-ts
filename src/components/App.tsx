import React, { useState, Fragment } from "react"
import _ from "lodash"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar"
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import ListItem from './ListItem'

const App: React.FC = () => {
  const [input, setInput] = useState<string>("") // search text input
  const [results, setResults] = useState<any[]>([]) // results data from API

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleKeys = (kinput: React.KeyboardEvent<HTMLInputElement>) => {
    if(kinput.key === "Enter"){
      getResults()
    }
    if (kinput.key === "Escape"){
      clear()
    }
  }

  const clear = () => {
    setInput("")
    setResults([])
  }

  const getResults = async () => {
    const URL =
      "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="

    if (input.trim().length > 0) {
      const res = await fetch(URL + input)
      const json = await res.json()
      const data = _.zip(json[1], json[2], json[3]).map(i =>
        _.zipObject(["title", "info", "link"], i)
      )

      setResults(data)
    }
  }
  
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Search Wikipedia
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Container maxWidth="md">  
        <div className="wiki-box">
          <TextField
            label="What do you want to search?..."
            value={input}
            onChange={handleInput}
            onKeyUp={handleKeys}
            fullWidth
          />

          <div className="wiki-btns">
            <Button
              variant="outlined"
              color="secondary"
              onClick={clear}
            >
              Clear
            </Button>{" "}
            <Button
              variant="outlined"
              onClick={() =>
                window.open("https://en.wikipedia.org/wiki/Special:Random")
              }
            >
              Random
            </Button>{" "}
            
            <Button
              variant="outlined"
              color="primary"
              onClick={getResults}
            >
              Search
            </Button>
          </div>
          <br />
          <br />

          <div className="list-group">
            {results.length > 0 && (
              <div>
                <Typography variant="h4" gutterBottom>
                  Results
                </Typography>
                <br />
                {results.map((item, idx) => {
                  return (
                    <Fragment key={idx}>
                      <ListItem
                        link={item.link}
                        title={item.title}
                        info={item.info}
                      />
                    </Fragment>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
