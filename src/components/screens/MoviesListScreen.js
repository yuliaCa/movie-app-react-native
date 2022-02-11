import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesContainer from "../containers/MoviesContainer";
import MovieDetailScreen from "./MovieDetailScreen";

const Stack = createNativeStackNavigator();

const MoviesListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MoviesContainer" component={MoviesContainer} />
      <Stack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
        options={({ route }) => ({
          title: route.params.label,
          headerBackTitle: "Back To List",
        })}
      />
    </Stack.Navigator>
  );
};

export default MoviesListScreen;
