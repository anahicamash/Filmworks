import useFetcher from '../hooks/useFetcher'
import React, { useState } from 'react';
import { getCast } from '../utils/getSeries'

const infoCast = ({ id }) => {
    const { response: castData } = useFetcher('https://api.tvmaze.com/shows', id, getCast)
    const imageUrl = 'https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png'
    return (
        castData.length === 0
            ? <p className='text-center'>Cast not available</p>
            : (
                <div className="row w-100 d-flex justify-content-center">
                    {castData.map(item => (
                        <div className="card col-xl-3 m-1" key={item.person.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={item.person.image !== null ? item.person.image.original : imageUrl} style={{ width: '5em', height: '6em', objectFit: 'cover' }} className="rounded-3 img-fluid" />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{item?.person.name}</p>
                                            <p className="text-muted mb-0">{item?.character.name}</p>
                                        </div>
                                    </div>
                                    <span className="badge rounded-pill badge-success bg-dark">{item.person?.country !== null ? item.person.country?.name : "Unknown"}</span>
                                </div>
                            </div>
                        </div>
                    )
                    )}

                </div>
            )


    )
}

export default infoCast