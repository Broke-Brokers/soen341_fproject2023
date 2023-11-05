import React from 'react'
import Request_visite from '../components/Request_visite'
import Search_Result_Grid from '../components/search-for-brokers/Search_Result_Grid'

function Broker() {
  return (
    <div>
      <Search_Result_Grid/>
      <Request_visite/>
    </div>
  )
}

export default Broker
