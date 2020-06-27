import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import LOGO from '../logo.png';
import {useNavigation} from '@react-navigation/native';

let {width, height} = Dimensions.get('window');

const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="simple-line-icon"
          name="menu"
          color="black"
          size={22}
          onPress={() => navigation.openDrawer()}
        />
        <Image
          source={LOGO}
          style={{
            resizeMode: 'contain',
            width: 164,
            height: 24,
            alignSelf: 'center',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <Icon type="font-awesome" name="cart-plus" color="black" size={22} />
        </View>
      </View>
      <ScrollTab />
    </SafeAreaView>
  );
};
const ScrollTab = () => {
  return (
    <ScrollableTabView
      tabBarActiveTextColor="black"
      tabBarInactiveTextColor="#6c6c6c"
      tabBarUnderlineStyle={{backgroundColor: 'black'}}
      tabBarTextStyle={{fontFamily: 'Optima', fontSize: 13}}
      initialPage={0}
      //style={{justifyContent: 'space-between', flexDirection: 'row'}}
      renderTabBar={() => <ScrollableTabBar />}>
      <Test tabLabel="HOME" />
      <Text tabLabel="NEWS FEED">project</Text>
    </ScrollableTabView>
  );
};

const Test = () => {
  return (
    <View style={{backgroundColor: 'green', width: 122, height: 100}}>
      <Text>123</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderHome;
