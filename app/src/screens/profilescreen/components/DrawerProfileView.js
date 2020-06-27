import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
let {width, height} = Dimensions.get('window');

const DrawerProfileView = ({props}) => {
  const navigation = useNavigation(props);
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.content}>
          <Text>1123</Text>
          <Icon
            name="x"
            type="octicon"
            size={22}
            onPress={() =>
              navigation.dispatch(DrawerActions.jumpTo('profiles'))
            }
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
    fontFamily: 'Optima',
  },
});
export default DrawerProfileView;
