import React, {Component, useState} from 'react';
import {View, Dimensions, Button, Text, TouchableOpacity} from 'react-native';

import {styles} from './Style';
import {Tab, RenderModal, RenderPhoto, RenderModel} from './Index';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');
const modelData = [
  {
    title: 'Upload a photo',
  },
  {
    title: 'Pick a Model',
  },
];
const ToggleModel = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewTabs}>
        {active === 0 ? (
          <RenderPhoto showModal={() => setIsVisible(!isVisible)} />
        ) : (
          <RenderModel />
        )}
        {isVisible && (
          <RenderModal
            isVisible={isVisible}
            onPress={() => setIsVisible(!isVisible)}
          />
        )}
        <View style={styles.tabs}>
          {modelData.map((v, i) => (
            <Tab
              index={i}
              key={i}
              title={v.title}
              onPress={() => setActive(i)}
              active={active}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToggleModel;
