import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import LOGO from '../logo.png';
const HeaderHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          //flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'auto',
          backgroundColor: 'red',
          height: 30,
        }}>
        <Icon type="material" name="menu" color="black" size={30} />
        <Image
          source={LOGO}
          style={{resizeMode: 'contain', width: 164, height: 28}}
        />
        <View>
          <Icon type="font-awesome" name="cart-plus" color="black" size={30} />
        </View>
      </View>
      <ScrollTab />
    </SafeAreaView>
  );
};
const ScrollTab = () => {
  return (
    <ScrollableTabView
      tabBarPosition="overlayTop"
      tabBarActiveTextColor={{color: 'black'}}
      tabBarInactiveTextColor={{color: '#6c6c6c'}}
      tabBarUnderlineStyle={{backgroundColor: 'black'}}
      initialPage={0}
      style={{justifyContent: 'space-between'}}
      renderTabBar={() => <ScrollableTabBar />}>
      <Text tabLabel="HOME">My</Text>
      <Text tabLabel="NEWS FEED">favorite</Text>
      <Text tabLabel="INFORMATION">project</Text>
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    backgroundColor: '#098FA8',
    borderBottomLeftRadius: 18,
    height: '50%',
    //display: 'flex'
  },
  headerIcon: {
    flexDirection: 'row',
    //alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});

export default HeaderHome;
