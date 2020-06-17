import React from 'react';
import {SafeAreaView, View, Image, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import logo from '../../../../res/images/logo.png';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ScrollTab />
      </View>
    </View>
  );
}

const ScrollTab = () => {
  return (
    <ScrollableTabView
      style={{marginVertical: 10}}
      initialPage={0}
      tabBarUnderlineStyle={{display: 'none'}}
      tabBarActiveTextColor="white"
      tabBarTextStyle={{fontSize: 12, fontWeight: 'bold'}}
      tabBarInactiveTextColor="black">
      <View tabLabel="NEW ARRIVAL"><Text>123</Text></View>
      <View tabLabel="SALE" />
    </ScrollableTabView>
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
  },
  headerIcon: {
    flexDirection: 'row',
    //alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
