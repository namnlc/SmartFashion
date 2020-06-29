import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Style';
const DrawerProfileView = ({props}) => {
  const navigation = useNavigation(props);
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <Text style={styles.txt}>Hey Yo</Text>
          <Icon
            name="x"
            type="octicon"
            size={22}
            onPress={() =>
              navigation.dispatch(DrawerActions.jumpTo('profiles'))
            }
          />
        </View>
        <ContentProfile />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const ContentProfile = () => {
  return (
    <View style={styles.contentProfile}>
      <TouchableOpacity style={styles.touchProfile}>
        <Icon name="user" type="font-awesome" size={22} />
        <Text style={styles.txt}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchProfile}>
        <Icon name="settings" type="octicons" size={22} />
        <Text style={styles.txt}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchProfile}>
        <Icon name="info" type="feather" />
        <Text style={styles.txt}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchProfile}>
        <Icon name="login" type="simple-line-icon" />
        <Text style={styles.txt}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DrawerProfileView;
