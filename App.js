import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Artis from "./frontend/components/artis";
import { configureStore } from "./frontend/store/store";

import ActionCable from "react-native-actioncable";
import ActionCableProvider from "react-actioncable-provider";

const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <ActionCableProvider>
          <Artis />
        </ActionCableProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
