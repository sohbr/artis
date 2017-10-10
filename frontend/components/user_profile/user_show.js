import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, ScrollView, Image, Text, StyleSheet } from 'react-native';

class UserShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ScrollView>
        <Image source={require('../../../docs/assets/img/minoru-mineta.jpg')} />
        <Text style={{fontSize:50}}>Hello World!</Text>
      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
