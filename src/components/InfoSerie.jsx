
const InfoSerie = ({ seriesData }) => {
    const imageUrl = 'https://media5.irmconsult.no/2020/05/gabriel-bnohZ9c4lqg-unsplash-scaled.jpg'
    return (
        <section className="vh-100 ">
            <div className="col mb-4 mb-lg-0">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4 gradient-custom text-center text-white p-3">
                            <img src={seriesData.image !== null ? seriesData.image.original : imageUrl} alt="Avatar" className="img-fluid rounded-3" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-3">
                                <h6 className="fw-bolder">Information</h6>
                                <hr className="mt-0 mb-4" />
                                <div className="row pt-1">
                                    <div className="col-6 mb-3">
                                        <h6 className="fw-bolder">Name</h6>
                                        <p className="text-muted">{seriesData.name}</p>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <h6 className="fw-bolder">Languaje</h6>
                                        <p className="text-muted">{seriesData?.language}</p>
                                    </div>
                                </div>
                                <div className='row pt-1'>
                                    <div className="col mb-3">
                                        <h6 className="fw-bolder">Summary</h6>
                                        <p className="text-muted">{seriesData.summary === null ? "No disponible " : ((seriesData.summary).replaceAll(/(<([^>]+)>)/ig, ' '))}</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSerie