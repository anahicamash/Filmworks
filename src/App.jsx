import React, { useState, useEffect,useRef } from 'react';
import Series from "./components/Series"
import useFetcher from './hooks/useFetcher';
import { getSeries } from './utils/getSeries';
import './App.css'
function App() {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('girls')
  const { response  } = useFetcher('https://api.tvmaze.com/search/shows', query, getSeries)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const searchInput = searchRef.current.value
    setQuery(searchInput)

    e.target.reset()
  }
  return (
    <div className='container w-100'>
      <form className='d-flex w-100 justify-content-center flex-column align-items-center mt-5' onSubmit={handleSubmit}>
                <label className="form-label fs-1">¿Qué serie te gustaría buscar?</label>
                <input ref={searchRef} type="text" className="form-control mb-1 w-50" id="exampleInputPassword1" />
                <button type="submit" className="btn btn-primary w-50" id="button-submit">Submit</button>
      </form>
      <div className='container mt-5 p-4'>
        <Series data={response} /> 
      </div>
    </div>
  );
}
export default App
