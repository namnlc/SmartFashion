import {StyleSheet, Dimensions, Platform} from 'react-native';

let {width: w, height: h} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botView: {
    width: w,
    height: h / 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    backgroundColor: 'white',
  },
  txt: {
    fontFamily: 'optima',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  txtCate: {
    fontFamily: 'optima',
    fontSize: 13,
  },
  iconMini: {
    fontSize: 30,
    height: 20,
  },
  yourChoice: {
    width: w / 2,
    top: -25,
    left: 0,
  },
  categories: {
    width: Platform.OS === 'android' ? w / 1.4 : w / 1.3,
    top: -25,
    left: -20,
  },
  arrange: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    marginRight: 10,
  },
  viewArrange: {
    width: w / 4,
    alignSelf: 'flex-end',
    top: 10,
  },
  txtArrange: {
    fontFamily: 'optima',
    fontSize: 12,
    fontWeight: 'bold',
  },
  viewTried: {
    height: h / 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTried: {
    fontFamily: 'optima',
    fontSize: 14,
    color: '#616161',
  },
  img: {
    width: Platform.OS === 'ios' ? w / 8 : w / 10,
    height: Platform.OS === 'ios' ? h / 8 : h / 15,
  },
});
