import {StyleSheet, Dimensions} from 'react-native';
let {width: w} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  content: {
    width: w / 2,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: 'blue',
  },
  txt: {
    fontFamily: 'optima',
  },
  txtSignUp: {
    fontFamily: 'optima',
    color: 'black',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  txtSmall: {
    fontSize: 14,
  },
  txtMedium: {
    fontSize: 18,
  },
  txtLarge: {
    fontSize: 20,
  },
  txtSign: {
    fontFamily: 'optima',
    textTransform: 'uppercase',
    fontSize: 17,
  },
  colorSign: {
    color: 'black',
  },
  txtForgot: {
    marginLeft: 10,
    color: '#616161',
    marginBottom: 20,
  },
  contentSign: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  btnSignIn: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 15,
  },
  btnSignUp: {
    backgroundColor: 'white',
  },
  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  apple: {
    backgroundColor: 'black',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //top: -20,
  },
  logo: {
    resizeMode: 'contain',
    backgroundColor: 'green',
    height: 33,
    width: 33,
    alignSelf: 'flex-start',
  },
  x: {
    alignSelf: 'flex-end',
    backgroundColor: 'green',
  },
  sizeIcon: {
    width: 35,
    height: 35,
  },
  txParam: {
    color: '#616161',
  },
  txHeader: {
    paddingBottom: 10,
  },
  pickDate: {
    backgroundColor: 'transparent',
  },
  btnSign: {
    borderColor: '#616161',
    borderWidth: 0.5,
  },
});
