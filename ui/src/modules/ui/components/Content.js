import React from 'react'
import { Container, Toolbar, Snackbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Routes from './Routes'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Content() {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        <Routes></Routes>
        <Snackbar
          open
          message="Hello"
          action={
            <Button color="inherit" size="small">
              Close
            </Button>
          }
        ></Snackbar>
      </Container>
    </main>
  )
}
