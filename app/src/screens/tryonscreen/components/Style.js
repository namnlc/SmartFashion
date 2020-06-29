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
  content: {
    position: 'absolute',
    //zIndex: -1,
    //backgroundColor: 'red',
  },
  txt: {
    fontFamily: 'Optima',
    textTransform: 'uppercase',
    fontSize: 15,
  },
  txtCate: {
    fontFamily: 'Optima',
    fontSize: 13,
  },
  iconMinius: {
    fontSize: 50,
    height: 30,
    top: -15,
  },
  yourChoice: {
    marginTop: 10,
    width: width / 2,
  },
  categories: {
    marginTop: 10,
    width: width / 2 + 65,
  },
  tabCategories: {
    left: -15,
  },
  arrange: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    //width: width / 4,
    //alignSelf: 'flex-end',
    marginRight: 10,
    //backgroundColor: 'blue',
  },
  viewArrange: {
    width: width / 3 - 20,
    alignSelf: 'flex-end',
    //backgroundColor: 'pink',
  },
  txtArrange: {
    fontFamily: 'Optima',
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewTried: {
    height: height / 6 + 10,
    //width: width,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  txtTried: {
    fontFamily: 'Optima',
    fontSize: 15,
    color: '#777777',
  },
});
