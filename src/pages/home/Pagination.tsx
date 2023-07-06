import { Pagination as PaginationUI, Box } from '@mui/material'
import { useState } from 'react'

const Pagination = () => {
  const [page, setPage] = useState<number>(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    console.log(value)
  }
  return (
    <Box
      mt={{ xs: '4rem', md: '6rem' }}
      mb={{ xs: '2rem', md: '4rem' }}
      display={'flex'}
    >
      <PaginationUI
        count={10}
        page={page}
        onChange={handleChange}
        sx={{ marginInline: 'auto' }}
        color="primary"
      />
    </Box>
  )
}

export default Pagination
