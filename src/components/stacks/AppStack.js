import { NavigationContainer } from "@react-navigation/native";

import * as React from "react";

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
