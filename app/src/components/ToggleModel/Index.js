import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {Component, useState} from 'react';
import wel from '../../../res/images/welcome2.png';
import Modal from 'react-native-modal';
import {styles} from './Style';
import girl from '../../../res/images/girl.png';
import man from '../../../res/images/man.png';
import wel1 from '../../../res/images/welcome3.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export const Tab = ({title, onPress, active, index}) => {
  const styleTab = [
    index === active && {backgroundColor: '#098FA8'},
    styles.tab,
  ];
  const styleText = [{color: index === active ? '#ffffff' : '#098FA8'}];
  return (
    <TouchableOpacity style={styleTab} activeOpacity={1} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const photoData = [
  {
    title: 'Pick a gender & take a photo',
    styleTouch: styles.pickGender,
    styleText: [styles.txt, styles.txtPick],
  },
  {
    title: 'Change Later',
    styleTouch: [styles.pickGender, styles.changeLater],
    styleText: [styles.txt, styles.txtChange],
  },
];

export const RenderPhoto = ({showModal, changeScreen, index}) => {
  function action(i) {
    if (i === 0) {
      showModal();
    } else {
      navigation.navigate('welcomeScreen');
    }
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.render}>
      <View style={styles.renderPhoto}>
        <Image source={wel} />
        {photoData.map((v, i) => (
          <TouchableOpacity
            style={v.styleTouch}
            key={i}
            activeOpacity={0.5}
            onPress={() => action(i)}>
            <Text style={v.styleText}>{v.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};
const modelData = [
  {
    title: 'Pick this model',
    styleTouch: styles.pickModel,
    styleText: [styles.txt, styles.txtPick],
  },
  {
    title: 'Change later',
    styleTouch: [styles.pickModel, styles.changeModel],
    styleText: [styles.txt, styles.txtChange],
  },
];
export const RenderModel = () => {
  return (
    <SafeAreaView style={styles.render}>
      <Image source={wel1} />
      <View style={styles.model}>
        {modelData.map((v, i) => (
          <TouchableOpacity key={i} style={v.styleTouch} activeOpacity={0.5}>
            <Text style={v.styleText}>{v.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export const RenderModal = ({isVisible}) => {
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
              activeOpacity={0.5}>
              <Text style={[styles.txt, styles.txtChange]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchModal,
                {backgroundColor: '#098FA8', marginLeft: 15},
              ]}
              activeOpacity={0.5}>
              <Text style={styles.txtModal}>Take a photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
