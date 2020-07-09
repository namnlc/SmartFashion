import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
const DrawerHomeScreen = ({props}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <Text>Hey Yo</Text>
          <Icon
            name="x"
            type="octicon"
            size={22}
            onPress={() => navigation.dispatch(DrawerActions.jumpTo('home'))}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  txt: {
    fontSize: 15,
    fontFamily: 'optima',
  },
});
export default DrawerHomeScreen;
