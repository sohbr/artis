import React from 'react';
import { connect } from 'react-redux';
import { createDoomi, fetchAllDoomis } from '../actions/doomi_actions';
import SessionForm from './session_form/session_form';

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
  }

  render() {
    return (
      <View style={styles.container}>
        <SessionForm />
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
