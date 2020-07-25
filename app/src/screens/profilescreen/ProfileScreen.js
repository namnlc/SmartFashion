import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Info, Divider} from './Style';
import {Input, Button, Avatar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import profile from '../../../res/images/profile.jpg';
import {styles} from './Style';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../components/ScrollableView/Scrollable';
import NoData from '../../../res/images/nodata.png';

const {width} = Dimensions.get('window');
const ProfileScreen = () => {
  return <ProfileSign />;
};

const ProfileNotSign = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Icon
            name="menu"
            type="feather"
            size={24}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.txtHeader}>PROFILE</Text>
          <Icon name="cart-plus" type="font-awesome" size={24} />
        </View>
        <Image source={profile} style={styles.img} />
        <View style={styles.contentList}>
          {data.map((v, i) => (
            <View style={styles.viewList} key={i}>
              <Icon name="lens" type="material" size={10} />
              <Text style={styles.txtList}>{v.title}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.txtSign}>
          And more than that just by Signing Up
        </Text>
        <TouchableOpacity
          style={styles.touchSign}
          onPress={() => navigation.push('authNavigator')}>
          <Text style={styles.txtTouch}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <View>
          <Text style={styles.txAccount}>
            Already have an account?
            <Text> </Text>
            <Text
              style={styles.txSign}
              onPress={() => navigation.push('authNavigator')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const ProfileSign = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="menu"
          type="feather"
          size={24}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.txtHeader}>PROFILE</Text>
        <Icon name="cart-plus" type="font-awesome" size={24} />
      </View>
      <ScrollTab />
    </SafeAreaView>
  );
};

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyHeader}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            size={50}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <View style={styles.info}>
            <View style={styles.container}>
              <Info style={styles.number}>0</Info>
              <Info>Posts</Info>
            </View>
            <Divider />
            <View style={styles.container}>
              <Info style={styles.number}>0</Info>
              <Info>Follower</Info>
            </View>
            <Divider />
            <View style={styles.container}>
              <Info style={styles.number}>0</Info>
              <Info>Following</Info>
            </View>
          </View>
        </View>
        <Button
          type="outline"
          title="Edit Profile"
          titleStyle={styles.txtEdit}
          buttonStyle={styles.btn}
        />
      </View>
      <View style={styles.bodyFooter}>
        <Image
          source={NoData}
          resizeMode="contain"
          style={styles.noDataImage}
        />
        <Info>There is no data yet</Info>
      </View>
    </View>
  );
};

const ScrollTab = () => {
  return (
    <ScrollableTabView
      //tabBarTextStyle={styles.txTab}
      locked={true}
      initialPage={4}
      renderTabBar={() => (
        <ScrollableView
          textStyle={styles.txAccount}
          style={styles.content}
          activeTabs={{borderBottomWidth: 2, alignSelf: 'center'}}
        />
      )}>
      <Text tabLabel="Clothes" />
      <Text tabLabel="Tried" />
      <Text tabLabel="My Favorite" />
      <Text tabLabel="Model" />
      <MyProfile tabLabel="My Profile" />
    </ScrollableTabView>
  );
};
const data = [
  {
    title: 'Create your profile',
  },
  {
    title: 'Manage your own wardrobe',
  },
  {
    title: 'Experience unlimited features',
  },
];

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Icon name="x" type="feather" size={24} />
          <Text style={styles.txSign}>Edit Profile</Text>
          <Text style={styles.txSign}>Save</Text>
        </View>
        <Avatar
          rounded
          size={50}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <View>
          <Text style={styles.txAccount}>Display Information</Text>
          <Input />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
