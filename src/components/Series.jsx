import CardSerie from './CardSerie'
import { Link } from 'react-router-dom'
export const Series = ({ data }) => {

  return (
    data.length === 0
      ? <p className='text-center'>Loading</p>
      : (
        <ul className='row gx-0 gx-md-5 gy-4 row-cols-6'>
          {data.map(item => (
            <li className='col-12 col-md-6 col-lg-3 text-decoration-none' key={item.show.id}>
              <Link to={`/series/${item.show.id}`} className='text-decoration-none'>
                <CardSerie image={item.show.image} name={item.show.name} />
              </Link>

            </li>
          )
          )}
        </ul>
      )
  )
}
export default Series
