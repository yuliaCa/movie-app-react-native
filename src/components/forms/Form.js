import React, { useState } from "react";

import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  VStack,
  Select,
  CheckIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Form = (props) => {
  const { fetchSearchMulti, fetchSearchedMovies, setUserInput, userInput } =
    props;

  const [selectedValue, setSelectedValue] = React.useState("multi");

  const onSubmit = (selectedValue) => {
    selectedValue === "movie" ? fetchSearchedMovies() : fetchSearchMulti();
  };

  return (
    <VStack space={1} width="90%" py={5} margin={5}>
      <FormControl isRequired>
        <FormControl.Label fontSize="sm">
          Search Movie/TV Show Name:
        </FormControl.Label>

        <Input
          placeholder="i.e. James Bond, Spider-Man"
          variant="filled"
          bg="gray.200"
          px={3}
          width="100%"
          InputLeftElement={
            <Icon
              size={5}
              ml={2}
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
          onChangeText={(value) => {
            setUserInput(value);
          }}
        />

        <HStack>
          <Select
            selectedValue={selectedValue}
            minWidth="150"
            accessibilityLabel="Movies or Multi"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => {
              setSelectedValue(itemValue);
            }}
          >
            <Select.Item key="firstOption" label="Movie" value="movie" />
            <Select.Item key="secondOption" label="Multi" value="multi" />
          </Select>
          <Button
            onPress={onSubmit}
            startIcon={<Icon as={Ionicons} name="ios-search" />}
          >
            Search
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default Form;
