import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return  (

  <Grid templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`
     }}>
    <GridItem area={'nav'} bg='coral'>
      <NavBar/>
      </GridItem>
    {useBreakpointValue({ base: false, lg: true }) && (
      <GridItem area={'aside'} bg='gold'>
        Aside</GridItem>
    )}
    <GridItem area={'main'} bg='dodgerblue'>
      Main</GridItem>
  </Grid>
  )
}

export default App
  