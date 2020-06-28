import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {styles} from './Style';
import BottomSheet from 'reanimated-bottom-sheet';
import {Icon} from 'react-native-elements';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import CustomBot from './CustomBot';
let {width, height} = Dimensions.get('window');

const BotSheet = () => {
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={[20, height / 3, height / 3]}
        renderContent={() => <ViewBot />}
        //renderHeader={() => <HeaderBotSheet />}
        //initialSnap={200}
        enableBottomClamp={true}
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
        iconStyle={{fontSize: 50, height: 30, top: -15}}
      />
      <ScrollableTabView
        renderTabBar={() => (
          <CustomBot textStyle={styles.txt} activeTextColor="black" />
        )}>
        <Text tabLabel="caterogies">1</Text>
        <Text tabLabel="your choices">2</Text>
        <Text tabLabel="model">3</Text>
      </ScrollableTabView>
    </View>
  );
};
const ScrollHeader = () => {
  return (
    <View>
      <Icon name="minus" type="feather" size={25} />
    </View>
  );
};
export default BotSheet;
