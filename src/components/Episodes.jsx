import useFetcher from '../hooks/useFetcher'
import { getSerie, getSeasons, getCast, getEpisodes } from '../utils/getSeries'


const Episodes = ({ id, season }) => {
  const { response: episodesData } = useFetcher('https://api.tvmaze.com/shows', id, getEpisodes)
  const imageUrl = 'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6'
  return (
    <div>

      <div className="card p-3">
        <h5 className="card-title fw-bolder">Season {season}</h5>
        <div className="row p-2">
          {episodesData.length === 0 ?
            <p className='text-center'>Not available</p>
            :
            (episodesData.map(item => (
              item.season === season ?
                <div className="card col-xl-12 col-lg-6 mb-4" key={item.id}>
                  <div className="card-body d-flex align-items-center flex-column">
                    <img src={item.image !== null ? item.image?.original : imageUrl} className="rounded-3 img-fluid" style={{ width: '70%', objectFit: 'cover' }} />
                    <div className="ms-3 mt-3">
                      <p className="fw-bold mb-1 card-title">{item.name}</p>
                      <p className="text-muted mb-0 card-text">{item.summary === null ? "Summary not available " : ((item.summary).replaceAll(/(<([^>]+)>)/ig, ' '))}</p>
                    </div>
                  </div>
                </div>
                : ""
            )))
          }


        </div>
      </div>


    </div>
  )
}

export default Episodes