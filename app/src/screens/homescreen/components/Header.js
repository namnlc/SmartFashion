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
import {
  useNavigation,
  DrawerActions,
  NavigationContainer,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const drawer = createDrawerNavigator();
let {width} = Dimensions.get('window');

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
      tabBarPosition="overlayTop"
      tabBarActiveTextColor="black"
      tabBarInactiveTextColor="#6c6c6c"
      tabBarUnderlineStyle={{backgroundColor: 'black'}}
      tabBarTextStyle={{fontFamily: 'Optima', fontSize: 13}}
      initialPage={0}
      //style={{justifyContent: 'space-between', flexDirection: 'row'}}
      renderTabBar={() => <ScrollableTabBar />}>
      <Text tabLabel="HOME">My</Text>
      <Text tabLabel="NEWS FEED">project</Text>
    </ScrollableTabView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'blue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 20,
    height: 30,
    marginHorizontal: 10,
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderHome;
