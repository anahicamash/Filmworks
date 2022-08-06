import { useParams } from 'react-router-dom'
import React, { useState } from 'react';
import useFetcher from '../hooks/useFetcher'
import { getSerie } from '../utils/getSeries'
import InfoSerie from './InfoSerie';
import InfoSeasons from './infoSeasons';
import InfoCast from './infoCast';
import { NavLink } from "react-router-dom";

export const SingleCardSerie = () => {

  const { id } = useParams()
  const { response: seriesData } = useFetcher('https://api.tvmaze.com/shows', id, getSerie)

  return (
    seriesData.length === 0
      ? <p className='text-center'>Loading</p>
      : (
        <div className='container w-80 mt-5'>
          <nav>
            <div className="nav nav-tabs mb-2" id="nav-tab" role="tablist">
              <button className="nav-link active fw-bolder" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Serie</button>
              <button className="nav-link fw-bolder" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Seasons</button>
              <button className="nav-link fw-bolder" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Cast</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <InfoSerie seriesData={seriesData} />
            </div>

            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <InfoSeasons id={id} />
            </div>

            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <InfoCast id={id} />
            </div>
          </div>
        </div>
      )
  )
}
export default SingleCardSerie