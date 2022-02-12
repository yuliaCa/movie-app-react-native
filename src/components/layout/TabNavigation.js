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
