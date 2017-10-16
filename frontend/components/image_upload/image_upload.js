import React from 'react';
import Exponent, { ImagePicker } from 'expo';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploading: false
    };
  }

  render() {
    let { image } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          {this._renderImage()}
        </View>
        <View>
          <Button
            onPress={this._pickImage}
            title="Pick an image from camera roll"
            color="#C6D166"
            />
        </View>
      </View>
    );
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (pickerResult.cancelled) {
      return;
    }
    this.setState({image: pickerResult.uri});
    this.props.updatePostWithImage(pickerResult.uri);
  };

  _renderImage() {
    let { image } = this.state;
    if (!image) {
      return;
    }
    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
          shadowColor: 'rgba(0,0,0,1)',
          shadowOpacity: 0.2,
          shadowOffset: { width: 4, height: 4 },
          shadowRadius: 5,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    borderWidth: 2,
    borderColor: "#00BCF3"
  }
});
