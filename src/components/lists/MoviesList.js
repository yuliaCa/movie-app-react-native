import { FlatList } from 'native-base'
import React from 'react'
import MovieCard from '../lisItems/MovieCard'

const MoviesList = props => {
  const { navigation, movies } = props

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          image={item.image}
          label={item.label}
          navigation={navigation}
          source={item.source}
          url={item.url}
        />
      )}
      keyExtractor={item => item.url}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default MoviesList
