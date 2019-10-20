/**
 *  List Items container component
 */

import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

import ListItem from "./ListItem"

interface IListGroupProps {
  results: any[]
}

const ListGroup: React.FC<IListGroupProps> = ({ results }) => {
  return (
    <div style={{ marginTop: "4rem" }}>
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
  )
}

export default ListGroup
