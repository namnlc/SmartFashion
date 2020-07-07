import {StyleSheet, Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botView: {
    width: width,
    height: height / 3,
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
  iconMinius: {
    fontSize: 50,
    height: 30,
    top: -15,
  },
  yourChoice: {
    width: width / 2,
    top: -10,
  },
  categories: {
    width: width / 2 + 65,
    top: -10,
  },
  tabCategories: {
    left: -15,
  },
  tabChoice: {
    //top: -20,
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
    width: width / 4,
    alignSelf: 'flex-end',
    top: 10,
  },
  txtArrange: {
    fontFamily: 'optima',
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewTried: {
    height: height / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTried: {
    fontFamily: 'optima',
    fontSize: 15,
    color: '#777777',
  },
});
