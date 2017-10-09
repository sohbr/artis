import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import DoomiProudContainer from './frontend/components/doomiproud';
import { configureStore } from './frontend/store/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <DoomiProudContainer/>
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
