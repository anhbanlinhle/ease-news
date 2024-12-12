import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { SampleProvider } from "../context/SampleContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "./screen/MainScreen";
import {NavigationContainer} from "@react-navigation/native";

const App = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SampleProvider>
          <SafeAreaProvider>
            <MainScreen/>
          </SafeAreaProvider>
        </SampleProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
