import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {styles} from './Style';
import BottomSheet from 'reanimated-bottom-sheet';
import {Icon} from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../../components/ScrollableView/Scrollable';
let {width, height} = Dimensions.get('window');

const BotSheet = () => {
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={[height / 3, height / 3, 20]}
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
        <YourChoice tabLabel="your choices" />
        <Text tabLabel="model">3</Text>
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
        <View tabLabel="Tried" style={{backgroundColor: 'blue'}}>
          <Text>2</Text>
        </View>
        <View tabLabel="Favorite" style={{backgroundColor: 'green'}}>
          <Text>3</Text>
        </View>
      </ScrollableTabView>
    </View>
  );
};

const Categories = () => {
  return (
    <ScrollableTabView
      style={styles.content}
      renderTabBar={() => (
        <ScrollableView
          textStyle={styles.txtCate}
          activeTextColor="black"
          tabStyle={{
            left: -15,
          }}
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
  );
};
export default BotSheet;
