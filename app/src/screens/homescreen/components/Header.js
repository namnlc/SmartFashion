import React from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import LOGO from '../logo.png';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Style';

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
        <Image source={LOGO} style={styles.logo} />
        <View style={{flexDirection: 'row'}}>
          <Icon
            type="font-awesome"
            name="cart-plus"
            color="black"
            size={22}
            onPress={() => navigation.navigate('Try On')}
          />
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
      renderTabBar={() => <ScrollableTabBar />}>
      <Test tabLabel="HOME" />
      <Text tabLabel="NEWS FEED">project</Text>
    </ScrollableTabView>
  );
};

const Test = () => {
  return (
    <View style={styles.viewHome}>
      <ScrollView style={styles.contentHome} bounces={true}>
        <View style={styles.containerHot}>
          <View style={styles.viewHot}>
            <Text style={styles.txt}>Hot items this week</Text>
            <TouchableOpacity style={styles.touchHot}>
              <Text style={styles.txtShow}>Show more</Text>
              <Icon name="arrow-right" type="feather" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerNew}>
          <View style={styles.viewHot}>
            <Text style={styles.txt}>new arrivals</Text>
            <TouchableOpacity style={styles.touchHot}>
              <Text style={styles.txtShow}>Show more</Text>
              <Icon name="arrow-right" type="feather" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerHot}>
          <View style={{marginVertical: 20, marginLeft: 10}}>
            <Text style={styles.txt}>Top favorite shops</Text>
          </View>
          <View style={styles.viewShop}>
            <Text style={styles.txtShow}>Smart Fashion</Text>
            <TouchableOpacity style={styles.touchShop}>
              <Text style={styles.txtShow}>Go to Shop</Text>
              <Icon name="arrow-right" type="feather" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HeaderHome;
