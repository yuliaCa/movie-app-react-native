import { createStackNavigator } from "react-navigation-stack";
// import { BG_COLOR, TINT_COLOR } from "../constants/Colors";

export const headerStyles = {
  headerStyle: {
    backgroundColor: "grey",
    borderBotomWidth: 0,
  },
  headerTitleStyle: {
    color: "black",
  },
  headerTintColor: "black",
};

export const craeteStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles,
      },
    },
  });
