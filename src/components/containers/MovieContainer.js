import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { withNavigationFocus } from "react-navigation";
import {
  API_KEY,
  imgURL,
  theMovieData,
  theImage,
  movieData,
} from "../config/api_config";
import axios from "axios";
import { Box, Button, Center, Text, Image, HStack, Heading } from "native-base";

const MovieContainer = ({ navigation, route }) => {
  const { label, overview, popularity, release, image } = route.params;

  return (
    <>
      <Box width="100%">
        <Center py={10}>
          <Heading pb={5}>{label}</Heading>
          <Image alt={label} source={{ uri: image }} size={"2xl"} />
          <Text margin={5}>{overview}</Text>
          <HStack space={5} px={15} py={5}>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {release}</Text>
          </HStack>
        </Center>
      </Box>
    </>
  );
};

export default MovieContainer;
