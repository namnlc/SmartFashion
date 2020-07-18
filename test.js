import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ViewPropTypes,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Overlay, Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import {BlurView} from '@react-native-community/blur';
import Test from './app/res/images/background.png';
const {width: w, height: h} = Dimensions.get('window');
const ModalView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="show" onPress={() => toggleModal()} />
      <ImageBackground source={Test} style={styles.img} resizeMode="contain" />
      <Overlay isVisible={isVisible} containerStyle={styles.modalView}>
        <BlurView
          style={styles.contentModal}
          blurType="dark"
          blurAmount={100}
          reducedTransparencyFallbackColor="white">
          <Text>1</Text>
          <Button title="hide" onPress={() => toggleModal()} />
        </BlurView>
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: 10,
  },
  contentModal: {
    position: 'absolute',
    width: w / 1.2,
    height: h / 3.3,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  img: {
    flex: 1,
    position: 'absolute',
  },
});
export default ModalView;
