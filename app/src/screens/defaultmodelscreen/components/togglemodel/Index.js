import {Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import wel from '../../../../../res/images/welcome2.png';
import Modal from 'react-native-modal';
import {styles} from './Style';
import girl from '../../../../../res/images/girl.png';
import man from '../../../../../res/images/man.png';
import wel1 from '../../../../../res/images/welcome3.png';
import {useNavigation} from '@react-navigation/native';
import {Sex} from '../../../../components';

export const Tab = ({title, onPress, active, index}) => {
  const styleTab = [
    index === active && {backgroundColor: '#098FA8'},
    styles.tab,
  ];
  const styleText = [
    {color: index === active ? '#ffffff' : '#098FA8'},
    {fontFamily: 'Optima'},
  ];
  return (
    <TouchableOpacity style={styleTab} activeOpacity={1} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const RenderPhoto = ({showModal, index}) => {
  function action(i) {
    if (i === 0) {
      showModal();
    } else {
      navigation.navigate('primaryNavigator');
    }
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.render}>
      <Image source={wel} style={styles.img} />
      {photoData.map((v, i) => (
        <TouchableOpacity
          style={v.styleTouch}
          key={i}
          activeOpacity={0.5}
          onPress={() => action(i)}>
          <Text style={v.styleText}>{v.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export const RenderModel = () => {
  return (
    <SafeAreaView style={styles.render}>
      <Image source={wel1} style={styles.img} />
      {modelData.map((v, i) => (
        <TouchableOpacity key={i} style={v.styleTouch} activeOpacity={0.5}>
          <Text style={v.styleText}>{v.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export const RenderModal = ({isVisible, onPress}) => {
  const [active, setActive] = useState('false');
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.containerModal}>
        <View style={styles.modal}>
          <View style={styles.viewModal}>
            {sexData.map((v, i) => (
              <Sex
                title={v.title}
                image={v.image}
                key={i}
                onPress={() => setActive(i)}
                index={i}
                active={active}
              />
            ))}
          </View>
          <View style={styles.btnModal} />
          <View style={styles.underModal}>
            <TouchableOpacity
              style={[styles.touchModal, {backgroundColor: '#E2F7FD'}]}
              activeOpacity={0.5}
              onPress={onPress}>
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

const modelData = [
  {
    title: 'Pick this model',
    styleTouch: styles.pickGender,
    styleText: [styles.txt, styles.txtPick],
  },
  {
    title: 'Change Later',
    styleTouch: [styles.pickGender, styles.changeLater],
    styleText: [styles.txt, styles.txtChange],
  },
];

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

const sexData = [
  {
    image: girl,
    title: 'Girl',
  },
  {
    image: man,
    title: 'Man',
  },
];
