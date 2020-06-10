import React, {Component, useState} from 'react';
import {View, Dimensions} from 'react-native';

import {styles} from './Style';
import {Tab, RenderModal, RenderPhoto, RenderModel} from './Index';

let {width} = Dimensions.get('window');

const ToggleModel = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.viewTabs}>
        {active === 0 ? <RenderPhoto /> : <RenderModel />}
        <View style={styles.tabs}>
          <Tab
            title="Upload a photo"
            styleText={[
              styles.txt,
              {color: active === 0 ? '#FFFFFF' : '#098FA8'},
            ]}
            styleTab={[
              {backgroundColor: active === 0 ? '#098FA8' : '#E2F7FD'},
              styles.tab,
            ]}
            onPress={() => setActive(0)}
          />
          <Tab
            title="Pick a Model"
            styleText={[
              styles.txt,
              {color: active === 0 ? '#098FA8' : '#ffffff'},
            ]}
            styleTab={[
              {backgroundColor: active === 0 ? '#E2F7FD' : '#098FA8'},
              styles.tab,
            ]}
            onPress={() => setActive(1)}
          />
        </View>
      </View>
    </View>
  );
};

export default ToggleModel;
