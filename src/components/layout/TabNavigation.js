import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import MoviesListScreen from "../screens/MoviesListScreen";
import SearchScreen from "../screens/SearchScreen";

const FirstRoute = () => (
  // <View style={{ flex: 1 }}></View>
  <MoviesListScreen />
);

const SecondRoute = () => <SearchScreen />;

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673aa8" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Movies" },
    { key: "second", title: "Search" },
    { key: "third", title: "TV Shows" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

// import * as React from "react";
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   StatusBar,
//   TouchableOpacity,
//   Animated,
//   Pressable,
// } from "react-native";
// import { TabView, SceneMap } from "react-native-tab-view";
// import {
//   NativeBaseProvider,
//   Box,
//   Text,
//   Center,
//   useColorModeValue,
// } from "native-base";
// import Constants from "expo-constants";

// const FirstRoute = () => (
//   <Center flex={1} my="4">
//     This is Tab 1
//   </Center>
// );

// const SecondRoute = () => (
//   <Center flex={1} my="4">
//     This is Tab 2
//   </Center>
// );

// const ThirdRoute = () => (
//   <Center flex={1} my="4">
//     This is Tab 3
//   </Center>
// );

// const FourthRoute = () => (
//   <Center flex={1} my="4">
//     This is Tab 4{" "}
//   </Center>
// );

// const initialLayout = {
//   width: Dimensions.get("window").width,
// };
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
//   fourth: FourthRoute,
// });

// function Example() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {
//       key: "first",
//       title: "Tab 1",
//     },
//     {
//       key: "second",
//       title: "Tab 2",
//     },
//     {
//       key: "third",
//       title: "Tab 3",
//     },
//     {
//       key: "fourth",
//       title: "Tab 4",
//     },
//   ]);

//   const renderTabBar = (props) => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);
//     return (
//       <Box flexDirection="row">
//         {props.navigationState.routes.map((route, i) => {
//           const opacity = props.position.interpolate({
//             inputRange,
//             outputRange: inputRange.map((inputIndex) =>
//               inputIndex === i ? 1 : 0.5
//             ),
//           });
//           const color =
//             index === i
//               ? useColorModeValue("#000", "#e5e5e5")
//               : useColorModeValue("#1f2937", "#a1a1aa");
//           const borderColor =
//             index === i
//               ? "cyan.500"
//               : useColorModeValue("coolGray.200", "gray.400");
//           return (
//             <Box
//               key={i}
//               borderBottomWidth="3"
//               borderColor={borderColor}
//               flex={1}
//               alignItems="center"
//               p="3"
//             >
//               <Pressable
//                 onPress={() => {
//                   console.log(i);
//                   setIndex(i);
//                 }}
//               >
//                 <Animated.Text
//                   style={{
//                     color,
//                   }}
//                 >
//                   {route.title}
//                 </Animated.Text>
//               </Pressable>
//             </Box>
//           );
//         })}
//       </Box>
//     );
//   };

//   return (
//     <TabView
//       navigationState={{
//         index,
//         routes,
//       }}
//       renderScene={renderScene}
//       renderTabBar={renderTabBar}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}
//       style={{
//         marginTop: StatusBar.currentHeight,
//       }}
//     />
//   );
// }

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   );
// };

// import React from "react";
// import { Platform } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import MovieScreen from "../screens/MoviesList";
// import TVShowsScreen from "../screens/TVShowsScreen";
// import SearchScreen from "../screens/SearchScreen";

// // import TabBarIcon from "../components/TabBarIcons";
// import { createStack } from "./config";

// const TabNavigation = createBottomTabNavigator(
//   {
//     Movie: {
//       screen: craeteStack(MovieScreen, "Movies"),
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => (
//           <TabBarIcon
//             focused={focused}
//             name={Platform.OS === "ios" ? "ios-film" : "md-film"}
//           />
//         ),
//       },
//     },
//     TV: {
//       screen: craeteStack(TVScreen, "TV"),
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => (
//           <TabBarIcon
//             focused={focused}
//             name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
//           />
//         ),
//       },
//     },
//     Search: {
//       screen: craeteStack(SearchScreen, "Search"),
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => (
//           <TabBarIcon
//             focused={focused}
//             name={Platform.OS === "ios" ? "ios-search" : "md-search"}
//           />
//         ),
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       showLabel: false,
//       style: {
//         backgroundColor: BG_COLOR,
//       },
//     },
//   }
// );

// export default createAppContainer(TabNavigation);
