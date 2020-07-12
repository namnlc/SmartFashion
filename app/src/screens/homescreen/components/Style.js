import {StyleSheet, Dimensions} from 'react-native';
let {width: w, height: h} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: 10,
    flexDirection: 'row',
    height: h / 13,
    justifyContent: 'space-between',
  },
  logo: {
    resizeMode: 'contain',
    width: w / 3,
    height: h / 23,
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewHome: {
    backgroundColor: '#F3F5F7',
  },
  txt: {
    fontFamily: 'optima',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  viewHot: {
    top: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtShow: {
    fontFamily: 'optima',
    fontSize: 15,
    marginRight: 10,
  },
  touchHot: {
    flexDirection: 'row',
  },
  containerHot: {
    height: h / 3,
    flex: 1,
  },
  containerNew: {
    //backgroundColor: 'white',
    height: h / 3,
    marginVertical: 8,
  },
  viewShop: {
    top: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  touchShop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconHeader: {
    flexDirection: 'row',
  },
  favoriteView: {
    marginVertical: 20,
    marginLeft: 10,
  },
  txTab: {
    fontFamily: 'optima',
    fontSize: 13,
  },
  content: {
    marginTop: 10,
    width: w,
  },
  test: {
    width: w,
  },
});
