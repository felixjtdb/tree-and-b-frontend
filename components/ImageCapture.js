import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import Navbar from './Navbar.js'

export default class ImageCapture extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takePhoto() {
     console.log('Button Pressed');
     if (this.camera) {
        console.log('Taking photo');
        const options = { quality: 1, base64: true, fixOrientation: true,
        exif: true};
        await this.camera.takePictureAsync(options).then(photo => {
           photo.exif.Orientation = 1;
            console.log(photo);
            console.log("banananas")
            });
      }
     }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }}
                  ref={ (ref) => {this.camera = ref} }
                  type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  width:60,
                  height:60,
                  top:360,
                  borderRadius:30,
                  backgroundColor:"#fff"
                }}
                onPress={() => {
                  this.takePhoto()
                }}>

              </TouchableOpacity>
            </View>
          </Camera>
          <Navbar navigation={this.props.navigation}/>
        </View>
      );
    }
  }
}
