import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon, Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import profile from './profile.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';
let {width, height} = Dimensions.get('window');

const ProfileScreen = () => {
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
      <Image source={profile} style={styles.img} />
      <View style={{marginVertical: 10}}>
        {data.map((v, i) => (
          <View style={styles.viewList}>
            <Icon name="lens" type="material" size={10} />
            <Text style={styles.txtList} key={i}>
              {v.title}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.txtSign}>And more than that just by Signing Up</Text>
      <TouchableOpacity style={styles.touchSign}>
        <Text style={styles.txtTouch}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.footer}>
        <Text style={styles.txtTouch}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.txtSignin}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    //backgroundColor: 'red',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 20,
  },
  txtHeader: {
    fontFamily: 'Optima',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    resizeMode: 'contain',
    width: width - 20,
    height: height / 3,
  },
  txtList: {
    fontSize: 16,
    fontFamily: 'Optima',
    marginLeft: 10,
  },
  viewList: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  txtSign: {
    fontSize: 14,
    fontFamily: 'Optima',
    color: '#8A8A8A',
    //marginBottom: 30,
  },
  touchSign: {
    borderRadius: 10,
    borderWidth: 1,
    //height: '25%',
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8A8A8A',
    padding: 10,
  },
  txtTouch: {
    fontFamily: 'Optima',
  },
  divider: {
    height: 1,
    width: width - 40,
    backgroundColor: '#8A8A8A',
  },
  txtSignin: {
    fontFamily: 'Optima',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ProfileScreen;
