import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from 'react-native-elements';
import ShopProfile from '../shopscreen/ShopProfile';
import {styles} from './Styles';
import BottomSheet from 'reanimated-bottom-sheet';
import ImgProduct from '../../../res/images/product.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const ProductDetail = () => {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={{backgroundColor: 'white'}}>
        <Icon name="chevron-left" type="feather" size={30} color="black" />
      </SafeAreaView>
      <ScrollView>
        <Image source={ImgProduct} style={styles.imgBackground} />
        <FooterProduct />
      </ScrollView> */}
      <ProductInformation />
    </View>
  );
};

const FooterProduct = () => {
  return (
    <View style={{backgroundColor: 'white', height: height}}>
      <View styles={styles.body}>
        <Text style={styles.txt}>Skirt 01</Text>
        <TouchableOpacity style={styles.colorProduct} />
      </View>
    </View>
  );
};
const ProductInformation = ({navigation: {goBack}}) => {
  //const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="feather"
          name="chevron-left"
          size={25}
          onPress={() => goBack()}
        />
        <Text style={styles.txtHeader}>Product Information</Text>
        <View />
      </View>
      <View style={styles.body}>
        <Text style={styles.txtBody}>Description</Text>
        <View style={styles.divi} />
        <Text style={styles.txtBody}>Return Policy:</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
