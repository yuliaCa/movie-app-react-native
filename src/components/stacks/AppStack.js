import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NativeBaseProvider, Box, Text, Center } from "native-base";
import Constants from "expo-constants";

import TabNavigation from "../layout/TabNavigation";

// const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppStack;

// <Stack.Navigator>
// <Stack.Screen
//   name='Index'
//   component={MoviesList}
//   options={{
//     title: 'Movie App',
//     headerStyle: {
//       backgroundColor: '#2c3e50'
//     },
//     headerTitleStyle: {
//       color: '#fff'
//     }
//   }}
// />
// <Stack.Screen
//   name='Movies'
//   component={MovieDetailScreen}
//   options={({ route }) => ({
//     title: route.params.label
//   })}
// />
// <Stack.Screen
//   name='Search'
//   component={SearchScreen}
//   options={({ route }) => ({
//     title: route.params.label,
//     headerBackTitle: 'Back to Movies'
//   })}
// />
// </Stack.Navigator>

{
  /* <AppStack.Navigator>
<AppStack.Screen
  name="MoviesList"
  component={MoviesList}
  options={{ title: "Movies" }}
/>
<AppStack.Screen
  name="SearchScreen"
  component={SearchScreen}
  options={{ title: "Search" }}
/>
</AppStack.Navigator> */
}
