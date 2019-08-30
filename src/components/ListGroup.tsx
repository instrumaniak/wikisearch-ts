/**
 *  List Items container component
 */

import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"

import ListItem from "./ListItem"

const StyledWrapper = styled.div`
  margin-top: 4rem;
`
interface IListGroupProps {
  results: any[]
}

const ListGroup: React.FC<IListGroupProps> = ({ results }) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  )
}

export default ListGroup
