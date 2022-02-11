import axios from 'axios'
import qs from 'qs'
import {  APP_KEY, BASE_URL, TYPE } from '../config/api_config'

export const getMovies = async movie => {
  const url = BASE_URL

  try {
    const params = {
      q: movie,
      // app_id: APP_ID,
      app_key: APP_KEY,
      type: TYPE,
      field: ['url', 'image', 'label', 'source']
    }

    const movieAxios = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
    })

    const response = await movieAxios.get(url, { params })

    const movies = response.data.hits

    return movies
  } catch (error) {
    throw error
  }
}

