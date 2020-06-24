import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import logo from '../../../../res/images/logo.png';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {ScrollableComponent} from 'react-native-keyboard-aware-scroll-view';
import FORYOU from '../foryou.png';

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
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
      }}>
      <Image
        source={FORYOU}
        style={{
          resizeMode: 'contain',
          justifyContent: 'center',
          alignSelf: 'center',
          //top: 20,
          backgroundColor: 'red',
          width: '100%',
          height: '70%',
          aspectRatio: 4 / 3,
          marginVertical: 20,
          // bottom: 20,
          //backgroundColor: 'transparent',
        }}
      />
      <Text style={{textAlign: 'center', marginHorizontal: 20}}>
        Take a photo and see what match or look similar to your clothes
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 25,
        }}>
        <Icon name="camera" type="simple-line-icon" color="black" size={24} />
      </TouchableOpacity>
      <Text>Upload</Text>
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
