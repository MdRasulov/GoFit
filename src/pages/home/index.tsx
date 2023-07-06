import { Container } from '@mui/material'
import Categories from './Categories'
import Exercises from './Exercises'
import Hero from './Hero'
import Search from './Search'
import Pagination from './Pagination'
import { useFetch } from '../../hooks/useFetch'
import { ExerciseInterface } from '../../types/interfaces'

const Home = () => {
  // const { data, loading, err } = useFetch<ExerciseInterface[]>()
  // console.log(data)

  return (
    <>
      <Hero />
      <Container sx={{ overflow: 'auto' }}>
        <Search />
        <Categories />
        <Exercises />
        <Pagination />
      </Container>
    </>
  )
}

export default Home
