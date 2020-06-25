import React from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import FORYOU from '../foryou.png';
import {styles} from './Style';
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
    <View style={styles.containerFor}>
      <Image source={FORYOU} style={styles.img} />

      <Text style={styles.txt}>
        Take a photo and see what match or look similar to your clothes
      </Text>
      <TouchableOpacity style={styles.upload}>
        <Icon name="camera" type="simple-line-icon" color="black" size={24} />
        <Text style={styles.txtTouch}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};
