import React from 'react';
import { connect } from 'react-redux';
import { createDoomi, fetchAllDoomis } from '../actions/doomi_actions';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

class DoomiProud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: 1
    };
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit() {
      const doomi = Object.assign({}, this.state);
      this.props.makeDoomi(doomi);
      debugger;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Hello Friends Sup</Text>
        <TextInput
          style={{height: 40}}
          onChangeText={(title) => this.setState({title})}
          placeholder="Type Here"/>
        <Button onPress={this._onSubmit} title="Submit"/>
      </View>


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

var mapStateToProps = (state) => {
  return {
  };
};

var mapDispatchToProps = dispatch => {
  return {
    makeDoomi: (doomi) => dispatch(createDoomi(doomi))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoomiProud);
