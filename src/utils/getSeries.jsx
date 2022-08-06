import axios from 'axios'

export const getSeries = async (url, query) => {
  const { data } = await axios.get(`${url}?q=${query}`)
  return data.length !== 0 ? data : []
}

export const getSerie = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}`)
  return data
}

export const getSeasons = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}/seasons`)
  return data
}

export const getEpisodes = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}/episodes`)
  return data
}

export const getCast = async (url, id) => {
  const { data } = await axios.get(`${url}/${id}/cast`)
  return data
}
