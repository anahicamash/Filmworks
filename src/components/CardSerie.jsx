import { useState } from 'react'
import '../App.css'
const CardSerie = ({ image, name }) => {
  const imageUrl = 'https://media5.irmconsult.no/2020/05/gabriel-bnohZ9c4lqg-unsplash-scaled.jpg'

  return (

    <article className='card'>
      <img className='card-img-top' src={image !== null ? image.original : imageUrl} style={{ width: '100%', height: '23em', objectFit: 'cover' }} />
      <div className='card-body text-dark text-center'>
        <h5 className='card-title'>{name}</h5>
      </div>

    </article>
  )
}

export default CardSerie