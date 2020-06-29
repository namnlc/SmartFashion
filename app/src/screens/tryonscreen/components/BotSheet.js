import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {styles} from './Style';
import BottomSheet from 'reanimated-bottom-sheet';
import {Icon} from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../../components/ScrollableView/Scrollable';
let {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
const BotSheet = () => {
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={[height / 3, height / 3, '3%']}
        renderContent={() => <ViewBot />}
      />
    </View>
  );
};

const ViewBot = () => {
  return (
    <View style={styles.botView}>
      <Icon
        name="minus"
        type="feather"
        color="#b3b3b3"
        iconStyle={styles.iconMinius}
      />
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.txt}
            activeTextColor="black"
            activeTabs={{borderBottomWidth: 2, alignSelf: 'center'}}
          />
        )}>
        <Categories tabLabel="categories" />
        <YourChoice tabLabel="your choice" />
        <Text tabLabel="models">3</Text>
      </ScrollableTabView>
    </View>
  );
};
const YourChoice = () => {
  return (
    <View>
      <ScrollableTabView
        style={styles.content}
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.txtCate}
            activeTextColor="black"
            style={styles.yourChoice}
          />
        )}>
        <View tabLabel="Chosen" style={{backgroundColor: 'red'}}>
          <Text>1</Text>
        </View>
        <Tried tabLabel="Tried" />
        <View tabLabel="Favorite" style={{backgroundColor: 'green'}}>
          <Text>3</Text>
        </View>
      </ScrollableTabView>
      <Arrange />
    </View>
  );
};

const Categories = () => {
  return (
    <View style={{}}>
      <ScrollableTabView
        style={styles.content}
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.txtCate}
            activeTextColor="black"
            tabStyle={styles.tabCategories}
            style={styles.categories}
          />
        )}>
        <View tabLabel="All" style={{backgroundColor: 'red'}}>
          <Text>1</Text>
        </View>
        <View tabLabel="Full Outfits" style={{backgroundColor: 'blue'}}>
          <Text>2</Text>
        </View>
        <View tabLabel="Tops" style={{backgroundColor: 'green'}}>
          <Text>3</Text>
        </View>
        <View tabLabel="Bottoms" style={{backgroundColor: 'pink'}}>
          <Text>4</Text>
        </View>
      </ScrollableTabView>
      <Arrange />
    </View>
  );
};

const Arrange = () => {
  const navi = useNavigation();

  return (
    <View style={styles.viewArrange}>
      <TouchableOpacity
        style={styles.arrange}
        onPress={() => console.log('ahihi')}>
        <Text style={styles.txtArrange}>Arrange</Text>
        <Icon name="arrow-right" type="feather" size={18} />
      </TouchableOpacity>
    </View>
  );
};

const Tried = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewTried}>
      <Icon
        name="plus"
        type="simple-line-icon"
        size={50}
        onPress={() => navigation.navigate('homeNavigator')}
      />
      <Text style={styles.txtTried}>Add items to your try-on list!</Text>
    </View>
  );
};
export default BotSheet;
