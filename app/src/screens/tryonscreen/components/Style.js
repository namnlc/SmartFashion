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
    fontSize: 15,
  },
  txtCate: {
    fontFamily: 'optima',
    fontSize: 13,
  },
  iconMini: {
    fontSize: 50,
    height: 30,
    top: -15,
  },
  yourChoice: {
    width: w / 2,
    top: -12,
    left: 15,
  },
  categories: {
    width: (w * 3) / 4,
    top: -10,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewTried: {
    height: h / 8,
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
    height: Platform.OS === 'ios' ? h / 8 : h / 10,
  },
});
