import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

import store from './src/store';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar hidden={true} />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
