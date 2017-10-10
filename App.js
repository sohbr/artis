import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Artis from './frontend/components/artis';
import { configureStore } from './frontend/store/store';

export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Artis/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
