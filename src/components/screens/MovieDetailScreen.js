import React, { useState } from "react";
import { set } from "react-native-reanimated";
import MovieContainer from "../containers/MovieContainer";

const MovieDetailScreen = ({ navigation, route }) => (
  <MovieContainer navigation={navigation} route={route} />
);

export default MovieDetailScreen;
