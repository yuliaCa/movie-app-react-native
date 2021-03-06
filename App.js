import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import Header from "./src/components/layout/Header";
import AppStack from "./src/components/stacks/AppStack";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />

      <AppStack />

      <StatusBar style="light" />
    </NativeBaseProvider>
  );
};

export default App;
