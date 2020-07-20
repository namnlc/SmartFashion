import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import LOGO from '../../../../res/images/logohome.png';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Style';
import ScrollableView from '../../../components/ScrollableView/Scrollable';
const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="simple-line-icon"
          name="menu"
          color="black"
          size={22}
          onPress={() => navigation.openDrawer()}
        />
        <Image source={LOGO} style={styles.logo} />
        <View style={styles.iconHeader}>
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
    </View>
  );
};
const ScrollTab = () => {
  return (
    <ScrollableTabView
      tabBarActiveTextColor="black"
      tabBarInactiveTextColor="#616161"
      tabBarTextStyle={styles.txTab}
      locked={true}
      initialPage={0}
      renderTabBar={() => (
        <ScrollableView
          tabBarTextStyle={[styles.txtSign, styles.txt]}
          style={styles.content}
          activeTabs={{borderBottomWidth: 2}}
        />
      )}>
      <Test tabLabel="HOME" />
      <Text tabLabel="NEWS FEED">project</Text>
    </ScrollableTabView>
  );
};

export const Test = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.test}>
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
        <View style={styles.favoriteView}>
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
  );
};

export default HeaderHome;
