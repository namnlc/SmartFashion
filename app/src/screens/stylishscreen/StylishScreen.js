import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {
  styles,
  Container,
  Body,
  ImageView,
  Scrollable,
  SafeAreaView,
  Title,
  ImageWardRobe,
  ScrollableFooter,
} from './Style';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ForYou from '../../../res/images/foryou.png';
import {Icon} from 'react-native-elements';
import StylishNoData from '../../../res/images/stylishnodata.png';
const StylishScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const Header = () => {
  return (
    <SafeAreaView>
      <ScrollableTabView
        locked={true}
        renderTabBar={() => <Scrollable activeTextColor="black" />}>
        <StyleForYouViewNoData tabLabel="STYLE FOR YOU" />
        <StylishWardRobe tabLabel="STYLISH WARDROBE" />
      </ScrollableTabView>
    </SafeAreaView>
  );
};

// const StyleForYouView = () => {
//   return (
//     <View style={styles.containerFor}>
//       <Image source={ForYou} style={styles.img} />
//       <Text style={styles.txt}>
//         Take a photo and see what match or look similar to your clothes
//       </Text>
//     </View>
//   );
// };

const StyleForYouViewNoData = () => {
  //const [active, setActive] = useState(false);
  return (
    <Container>
      <Body>
        <ImageView source={StylishNoData} />
      </Body>
      <ScrollableTabView renderTabBar={() => <ScrollableFooter />}>
        <Text tabLabel="Mix & Match">alo alo alo</Text>
        <Text tabLabel="Similar items">alo alo</Text>
      </ScrollableTabView>
    </Container>
  );
};

const StylishWardRobe = () => {
  return (
    <Body>
      <ImageWardRobe source={ForYou} />
      <Title>
        Take a photo and see what match or look similar to your clothes
      </Title>
      <TouchableOpacity style={styles.upload}>
        <Icon name="camera" type="simple-line-icon" color="black" size={24} />
        <Text style={styles.txtTouch}>Upload</Text>
      </TouchableOpacity>
    </Body>
  );
};

export default StylishScreen;
