import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import logo from '../../../../res/images/logo.png';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {ScrollableComponent} from 'react-native-keyboard-aware-scroll-view';
import FORYOU from '../foryou.png';

let {width, height} = Dimensions.get('window');
export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ScrollTab />
      </View>
    </SafeAreaView>
  );
}

const ScrollTab = () => {
  return (
    <ScrollableTabView
      tabBarPosition="top"
      tabBarActiveTextColor="black"
      tabBarInactiveTextColor="#6c6c6c"
      tabBarUnderlineStyle={{backgroundColor: 'black'}}
      tabBarTextStyle={{fontFamily: 'Optima', fontSize: 13}}
      initialPage={0}
      //style={{justifyContent: 'space-between', flexDirection: 'row'}}
      renderTabBar={() => <ScrollableTabBar />}>
      <StyleForYouView tabLabel="STYLE FOR YOU" />
      <Text tabLabel="STYLISH WARDROBE">project</Text>
    </ScrollableTabView>
  );
};
const StyleForYouView = () => {
  return (
    <View
      style={{
        height: height,
        //justifyContent: 'space-between',
      }}>
      <Image
        source={FORYOU}
        style={{
          resizeMode: 'contain',
          alignSelf: 'center',
          width: width / 2,
          height: height / 2,
        }}
      />

      <Text
        style={{
          textAlign: 'center',
          marginHorizontal: 20,
          fontFamily: 'Optima',
        }}>
        Take a photo and see what match or look similar to your clothes
      </Text>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 25,
          alignItems: 'center',
          alignSelf: 'center',
          padding: 10,
          marginTop: 20,
        }}>
        <Icon name="camera" type="simple-line-icon" color="black" size={24} />
        <Text style={{marginLeft: 10, fontFamily: 'Optima'}}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
  },
  header: {
    flex: 1,
    //backgroundColor: 'red',
    //position: 'absolute',
  },
});
