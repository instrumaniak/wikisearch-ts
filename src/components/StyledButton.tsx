//import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { darken } from "@material-ui/core/styles"

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 3px;
  border: 0;
  color: white;
  padding: ${props => props.theme.spacing(2)};
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.1);

  &:hover {
    background-color: ${props => darken(props.theme.palette.primary.main, 0.3)};
  }
`
export default StyledButton
