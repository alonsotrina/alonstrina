/* eslint-disable react/prop-types */
import { Button } from "./styled"

const Index = ({ variant, nameButton, size }) => {
  return (
    <Button variant={variant} size={size}>
      {nameButton}
    </Button>

  )
}

export default Index