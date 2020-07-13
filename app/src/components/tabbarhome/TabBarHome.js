import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import LIST from '../../../res/images/list.png';
import SETTING from '../../../res/images/setting.png';
import LISTDOWN from '../../../res/images/listdown.png';

let {width} = Dimensions.get('window');
const TabBarHome = ({title}) => {
  return (
    <View style={styles.top}>
      <View style={styles.topContent}>
        <Icon
          name="crop-square"
          type="material-community"
          color="#868686"
          size={30}
        />
        <Text>{title}</Text>
      </View>
      <View style={styles.icon}>
        <Image source={LIST} style={styles.imgIcon} />
        <Image source={LISTDOWN} style={styles.imgIcon} />
        <Image source={SETTING} style={styles.imgIcon} />
      </View>
    </View>
  );
};

export default TabBarHome;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    flexDirection: 'row',
    width: width,
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5,
    left: 15,
  },
  icon: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  imgIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});
