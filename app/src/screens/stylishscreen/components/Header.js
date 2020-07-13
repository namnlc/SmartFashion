import React from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import ForYou from '../foryou.png';
import {styles} from './Style';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../../components/ScrollableView/Scrollable';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollableTabView
        locked={true}
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.tx}
            activeTextColor="black"
            tabStyle={styles.tabCategories}
            style={styles.categories}
            activeTabs={{borderBottomWidth: 2, alignSelf: 'center'}}
          />
        )}>
        <StyleForYouView tabLabel="STYLE FOR YOU" />
        <StylishWardRobe tabLabel="STYLISH WARDROBE" />
      </ScrollableTabView>
    </SafeAreaView>
  );
};

const StyleForYouView = () => {
  return (
    <View style={styles.containerFor}>
      <Image source={ForYou} style={styles.img} />

      <Text style={styles.txt}>
        Take a photo and see what match or look similar to your clothes
      </Text>
      {/* <TouchableOpacity style={styles.upload}>
        <Icon name="camera" type="simple-line-icon" color="black" size={24} />
        <Text style={styles.txtTouch}>Upload</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const StylishWardRobe = () => {
  return (
    <View style={styles.containerFor}>
      <Image source={ForYou} style={styles.img} />

      <Text style={styles.txt}>
        Take a photo and see what match or look similar to your clothes
      </Text>
      <TouchableOpacity style={styles.upload}>
        <Icon name="camera" type="simple-line-icon" color="black" size={24} />
        <Text style={styles.txtTouch}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
