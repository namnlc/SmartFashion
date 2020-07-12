import React from 'react';
import {Image, SafeAreaView, View, Text} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../components/ScrollableView/Scrollable';
import {styles} from './Style';
import Event from '../../../res/images/Event.png';
const EventScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollableTabView
        tabBarActiveTextColor="black"
        tabBarInactiveTextColor="#616161"
        tabBarTextStyle={styles.txTab}
        initialPage={0}
        renderTabBar={() => (
          <ScrollableView
            tabBarTextStyle={styles.tx}
            style={styles.content}
            activeTabs={{borderBottomWidth: 2, alignSelf: 'center'}}
          />
        )}>
        <OnGoing tabLabel="ON GOING" />
        <NextEvent tabLabel="NEXT EVENTS" />
        <PastEvent tabLabel="PAST EVENTS" />
      </ScrollableTabView>
    </SafeAreaView>
  );
};

const OnGoing = () => {
  return (
    <View style={styles.viewFirst}>
      <Image source={Event} resizeMode="contain" style={styles.img} />
      <Text style={styles.tx}>There is no data yet</Text>
    </View>
  );
};

const NextEvent = () => {
  return (
    <View style={styles.viewFirst}>
      <Image source={Event} resizeMode="contain" style={styles.img} />
      <Text style={styles.tx}>There is no data yet</Text>
    </View>
  );
};

const PastEvent = () => {
  return (
    <View style={styles.viewFirst}>
      <Image source={Event} resizeMode="contain" style={styles.img} />
      <Text style={styles.tx}>There is no data yet</Text>
    </View>
  );
};

export default EventScreen;
