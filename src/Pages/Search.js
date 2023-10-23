import React from 'react'
import House_Grid from '../components/search-page/House_Grid'
import Search_Filter from '../components/search-page/Search_Filter'

function Search() {
  return (
    <div>
      <Search_Filter/>
      <House_Grid/>
    </div>
  )
}

export default Search

{/**From user story : https://github.com/Broke-Brokers/Broke_BRokers-soen341projectF2023/issues/124 */}