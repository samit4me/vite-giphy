import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { useDebounce } from '@reactuses/core'

import SearchInput from './SearchInput';

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
const emptyGifsResult = {
  data: [],
  pagination: { total_count: 0, count: 0, offset: 0 },
  meta: { status: 200, msg: 'OK', response_id: '' },
}

const Picture = styled.picture`
  display: flex;
  align-items: center;
  transition: all .3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    transform: scale(1.1);
  }
`

const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 200px;
  height: 200px;
`

function GiphyApi() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const [isFetching, setIsFetching] = useState(false)
  const [gifs, setGifs] = useState<GifsResult>(emptyGifsResult)

  const limit = 50

  const fetchGifs = useCallback(
    async ({ term }: { term: string }) => {
      setIsFetching(true)
      if (term) {
        const result = await gf.search(term, { limit })
        setGifs(result)
      } else {
        const result = await gf.trending({ limit })
        setGifs(result)
      }
      setIsFetching(false)
    },
    [],
  )

  useEffect(() => {
    fetchGifs({ term: debouncedSearchTerm })
  }, [fetchGifs, debouncedSearchTerm])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchInput
        value={searchTerm}
        placeholder='Search GIPHY'
        onChange={e =>setSearchTerm(e.target.value)}
      />
      <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
        {
          isFetching ? (
            <>
              {Array(limit).fill(null).map((_, idx) => (
                <Skeleton key={idx} variant="rectangular" width={200} height={200} />
              ))}
            </>
          ) : (
            <>
              {gifs.data.map(gif => (
                <Link key={gif.id} to={`${gif.id}`} state={gif}>
                  <Picture>
                    <source
                      type="image/webp"
                      srcSet={gif.images.fixed_width.webp}
                    />
                    <Image
                      alt={gif.alt_text}
                      src={gif.images.fixed_width.url}
                      width="100%"
                    />
                  </Picture>
                </Link>
              ))}
            </>
          )
        }
      </Box>
    </Box>
  )
}

export default GiphyApi