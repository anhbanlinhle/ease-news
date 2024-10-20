import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import { SampleContext } from "../context/SampleContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "./screen/MainScreen";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SampleContext.Provider value={{}}>
          <SafeAreaProvider>
            <MainScreen/>
          </SafeAreaProvider>
        </SampleContext.Provider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
