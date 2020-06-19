import React from 'react';
import {SafeAreaView, View, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import logo from '../../../../res/images/logo.png';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './TabBar';
import ArrivalScreen from '../../newarrivalscreen/ArrivalScreen';
const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView style={styles.headerIcon}>
          <Image source={logo} />
          <IconHeader />
        </SafeAreaView>
        <ScrollTab />
      </View>
    </View>
  );
};
const ScrollTab = () => {
  return (
    <ScrollableTabView
      style={{marginVertical: 10}}
      initialPage={0}
      tabBarUnderlineStyle={{display: 'none'}}
      tabBarActiveTextColor="#098FA8"
      tabBarTextStyle={{fontSize: 12, fontWeight: 'bold'}}
      tabBarInactiveTextColor="white"
      renderTabBar={() => <TabBar />}>
      <View tabLabel="NEW ARRIVAL">
        <ArrivalScreen />
      </View>
      <View tabLabel="POPULAR">
        <View style={{backgroundColor: 'red', width: 100, height: 100}} />
      </View>
      <View tabLabel="TOP TRIED-ON">
        <View style={{backgroundColor: 'red', width: 100, height: 100}} />
      </View>
      <View tabLabel="SMART STYLISH" />
      <View tabLabel="SALE" />
    </ScrollableTabView>
  );
};
const IconHeader = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="qrcode"
        type="font-awesome"
        color="white"
        style={{marginRight: 20}}
      />
      <Icon
        name="search"
        type="font-awesome"
        color="white"
        style={{marginRight: 20}}
      />
      <Icon
        name="cart-plus"
        type="font-awesome"
        color="white"
        style={{marginRight: 20}}
      />
      <Icon name="bell" type="font-awesome" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
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
