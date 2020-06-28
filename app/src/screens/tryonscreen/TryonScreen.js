import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import BotSheet from './components/BotSheet';
import GIRL from './components/girl.png';
let {width, height} = Dimensions.get('window');
const TryonScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={GIRL} style={styles.img}>
        <SafeAreaView style={styles.header}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="login"
              type="simple-line-icon"
              size={25}
              color="white"
              iconStyle={styles.iconShare}
            />
            <Icon
              name="share"
              type="simple-line-icon"
              size={25}
              color="white"
              iconStyle={{paddingRight: 2}}
            />
          </View>
          <Icon name="camera" type="simple-line-icon" size={30} color="white" />
        </SafeAreaView>
        <BotSheet />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    width: width,
    height: height,
    flex: 1,
    //alignItems: 'center',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    //alignItems: 'center',
    marginHorizontal: 20,
  },
  iconShare: {
    transform: [{rotate: '90deg'}],
    paddingRight: 2,
    marginRight: 20,
  },
});
export default TryonScreen;
