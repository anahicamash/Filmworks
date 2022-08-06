import useFetcher from '../hooks/useFetcher'
import React, { useState } from 'react';
import { getSeasons } from '../utils/getSeries'
import Episodes from './Episodes'
import { useParams } from 'react-router-dom'

const InfoSeasons = ({ id }) => {
  // const { id } = useParams()
  const { response: seasonData } = useFetcher('https://api.tvmaze.com/shows', id, getSeasons)
  const [season, setSeason] = useState(1);

  return (
    <div className="row">
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          {seasonData.map(item => (
            <a className="list-group-item list-group-item-action" key={item.id} id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home" onClick={() => setSeason(item.number)}>Season {item.number}</a>
          )
          )}
        </div>
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <Episodes id={id} season={season} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default InfoSeasons