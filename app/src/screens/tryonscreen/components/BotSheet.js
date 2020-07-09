import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from './Style';
import BottomSheet from 'reanimated-bottom-sheet';
import {Icon} from 'react-native-elements';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableView from '../../../components/ScrollableView/Scrollable';
import notData from '../../../../res/images/notData.png';
let {height} = Dimensions.get('window');
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
        iconStyle={styles.iconMini}
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
    <View style={styles.container}>
      <Arrange />
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.txtCate}
            activeTextColor="black"
            style={styles.yourChoice}
          />
        )}>
        <View tabLabel="Chosen">
          <Text>1</Text>
        </View>
        <Tried tabLabel="Tried" />
        <View tabLabel="Favorite">
          <Text>3</Text>
        </View>
      </ScrollableTabView>
    </View>
  );
};

const Categories = () => {
  return (
    <View style={styles.container}>
      <Arrange />
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableView
            textStyle={styles.txtCate}
            activeTextColor="black"
            tabStyle={styles.tabCategories}
            style={styles.categories}
          />
        )}>
        <View tabLabel="All">
          <Text>1</Text>
        </View>
        <View tabLabel="Full Outfits">
          <Text>2</Text>
        </View>
        <View tabLabel="Tops">
          <Text>3</Text>
        </View>
        <View tabLabel="Bottoms">
          <Text>4</Text>
        </View>
      </ScrollableTabView>
    </View>
  );
};

const Arrange = () => {
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
      <TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
        <Image
          source={notData}
          style={styles.img}
          resizeMode="contain"
          onPress={() => navigation.navigate('home')}
        />
      </TouchableWithoutFeedback>

      <Text style={styles.txtTried}>There is no data yet!</Text>
    </View>
  );
};
export default BotSheet;
