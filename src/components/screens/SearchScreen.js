import { View, Text, FlatList } from "native-base";
import axios from "axios";
import { searchMovies, searchMulti } from "../config/api_config";
import React, { useState } from "react";
import MovieContainer from "../containers/MovieContainer";
import Form from "../forms/Form";

const SearchScreen = ({ navigation, route }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [userInput, setUserInput] = useState();

  const fetchSearchedMovies = () => {
    axios.get(`${searchMovies}&query=${userInput}`).then(({ data }) => {
      setMoviesData(data.results);
      return moviesData;
    });
  };

  const fetchSearchMulti = () => {
    axios.get(`${searchMulti}&query=${userInput}`).then(({ data }) => {
      setMoviesData(data.results);
      return moviesData;
    });
  };

  return (
    <View>
      <Form
        fetchSearchedMovies={fetchSearchedMovies}
        fetchSearchMulti={fetchSearchMulti}
        userInput={userInput}
        setUserInput={setUserInput}
      />

      {moviesData.length !== 0 ? (
        <FlatList
          data={moviesData}
          renderItem={({ item }) => (
            <MovieCard
              key={item.id}
              id={item.id}
              label={item.title}
              popularity={item.popularity}
              release={item.release_date}
              navigation={navigation}
              image={`${imgURL}${item.poster_path}`}
            ></MovieCard>
          )}
        />
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  );
};

export default SearchScreen;
