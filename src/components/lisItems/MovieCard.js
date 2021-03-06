import React, { useState } from "react";

import axios from "axios";
import { API_KEY, imgURL, theMovieData } from "../config/api_config";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  VStack,
  Flex,
  Spacer,
} from "native-base";
const MovieCard = (props) => {
  const { id, image, label, navigation, popularity, release, url } = props;
  const [theMovieData, setTheMovieData] = useState();
  const [theImage, setTheImage] = useState();
  getTheMovieDetails = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then(({ data }) => {
        setTheMovieData(data);
        console.log(data);
        navigation.navigate("MovieDetailScreen", {
          label: data.title,
          overview: data.overview,
          popularity: data.popularity,
          release: data.release_date,
          image: `${imgURL}${data.backdrop_path}`,
        });
      });
  };
  return (
    <Flex
      style={{ marginTop: 15, marginBottom: 0 }}
      direction="row"
      pb={2}
      mb={10}
    >
      <Box style={{ marginRight: 10 }}>
        <Image alt={label} source={{ uri: image }} size={"xl"} />
      </Box>
      <VStack space={1}>
        <Heading size="xs">{label}</Heading>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Date: {release}</Text>
        <Box px={1} pb={0}>
          <Button
            onPress={() => {
              getTheMovieDetails(id);
            }}
          >
            More Details
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
};
export default MovieCard;
