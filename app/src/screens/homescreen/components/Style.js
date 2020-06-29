import {StyleSheet, Dimensions} from 'react-native';
let {width: w, height: h} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: w - 20,
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  logo: {
    resizeMode: 'contain',
    width: w / 3,
    height: h / 23,
    alignSelf: 'center',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewHome: {
    flex: 1,
    backgroundColor: '#F3F5F7',
  },
  txt: {
    fontFamily: 'Optima',
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
    fontFamily: 'Optima',
    fontSize: 15,
    marginRight: 10,
  },
  touchHot: {
    flexDirection: 'row',
  },
  containerHot: {
    backgroundColor: 'white',
    height: h / 3,
  },
  containerNew: {
    backgroundColor: 'white',
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
});
