import { useContext } from 'react'
import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager,
} from '@giphy/react-components'

function GiphySdk() {
return (
  <SearchContextManager apiKey={import.meta.env.VITE_GIPHY_API_KEY}>
    <GiphyComponents />
  </SearchContextManager>
)
}

function GiphyComponents () {
  const { fetchGifs, searchKey } = useContext(SearchContext)
  return (
    <>
      <SearchBar />
      <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} />
    </>
  )
}

export default GiphySdk