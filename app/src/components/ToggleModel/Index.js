import {
  Text,
  TouchableOpacity,
  ViewPropTypes,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import propTypes from 'prop-types';
import React, {Component, useState} from 'react';
import wel from '../../../res/images/welcome2.png';
import Modal from 'react-native-modal';
import {styles} from './Style';
import girl from '../../../res/images/girl.png';
import man from '../../../res/images/man.png';
import wel1 from '../../../res/images/welcome3.png';

let {width, height} = Dimensions.get('window');
console.log(width, height);
export class Tab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={this.props.styleTab}
        activeOpacity={1}
        onPress={this.props.onPress}>
        <Text style={this.props.styleText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

Tab.propTypes = {
  onPress: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  styleText: Text.propTypes.style,
  styleTab: ViewPropTypes.style,
};

export const RenderPhoto = () => {
  return (
    <SafeAreaView style={styles.render}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={wel} />
        <TouchableOpacity
          style={styles.pickGender}
          activeOpacity={0.5}
          onPress={() => {
            this.toggleModal(!this.setState.isVisible);
          }}>
          <Text style={[styles.txt, styles.txtPick]}>
            Pick a gender & take a photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.pickGender, styles.changeLater]}
          activeOpacity={0.5}>
          <Text style={[styles.txt, styles.txtChange]}>Change later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const RenderModel = () => {
  return (
    <SafeAreaView style={styles.render}>
      <Image source={wel1} />
      <View style={styles.model}>
        <TouchableOpacity style={styles.pickModel} activeOpacity={0.5}>
          <Text style={[styles.txt, styles.txtPick]}>Pick this model</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.pickModel, styles.changeModel]}
          activeOpacity={0.5}>
          <Text style={[styles.txt, styles.txtChange]}>Change later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const RenderModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.containerModal}>
        <View style={styles.modal}>
          <View style={styles.viewModal}>
            <TouchableOpacity style={{paddingRight: 60}}>
              <Image source={girl} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={man} />
            </TouchableOpacity>
          </View>
          <View style={styles.btnModal} />
          <View style={styles.underModal}>
            <TouchableOpacity
              style={[styles.touchModal, {backgroundColor: '#E2F7FD'}]}
              activeOpacity={0.5}
              onPress={() => setIsVisible(!isVisible)}>
              <Text style={[styles.txt, styles.txtChange]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchModal,
                {backgroundColor: '#098FA8', marginLeft: 15},
              ]}
              activeOpacity={0.5}
              onPress={() => setIsVisible(!isVisible)}>
              <Text style={styles.txtModal}>Take a photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
