import { Center, Container, Select, CheckIcon, FlatList } from "native-base";
import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  API_KEY,
  imgURL,
  nowPlaying,
  topRated,
  upcoming,
} from "../config/api_config";
import MovieCard from "../lisItems/MovieCard";

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [isPopular, setIsPopular] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  const getNowPlaying = () => {
    axios.get(nowPlaying).then(({ data }) => {
      setMoviesData(data.results);
      return moviesData;
    });
  };
  const getTopRated = () => {
    axios.get(topRated).then(({ data }) => {
      setMoviesData(data.results);
      return moviesData;
    });
  };
  const getUpcoming = () => {
    axios.get(upcoming).then(({ data }) => {
      setMoviesData(data.results);
      return moviesData;
    });
  };

  const fetchMovies = (value) => {
    switch (value) {
      case "now_playing":
        getNowPlaying();
        break;
      case "top_rated":
        getTopRated();
        break;
      case "upcoming":
        getUpcoming();
        break;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(({ data }) => {
        setMoviesData(data.results);

        return moviesData;
      });
  }, []);

  let [selectedValue, setSelectedValue] = React.useState("popular");

  return (
    <Container px={2}>
      <Center>
        <Select
          selectedValue={selectedValue}
          minWidth="200"
          accessibilityLabel="Choose Movies"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            setSelectedValue(itemValue);
            fetchMovies(itemValue);
          }}
        >
          <Select.Item
            key="firstOption"
            label="Now Playing"
            value="now_playing"
          />
          <Select.Item key="secondOption" label="Popular" value="popular" />
          <Select.Item key="thirdOption" label="Top Rated" value="top_rated" />
          <Select.Item key="fourthOption" label="Upcoming" value="upcoming" />
        </Select>
        {moviesData !== null ? (
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
          ></FlatList>
        ) : (
          ""
        )}
      </Center>
    </Container>
  );
};

export default MoviesContainer;
