import {StyleSheet, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');
export const signUp = StyleSheet.create({
  textGender: {
    justifyContent: 'center',
    //padding: 12.5,
    //color:"#696969"
  },
  txtDrop: {
    color: '#696969',
  },
  txt: {
    fontSize: 13,
    fontWeight: 'bold',
    //marginLeft: -25,
    textAlign: 'center',
    paddingVertical: 20,
  },
  txtInput: {
    width: '90%',
    borderRadius: 8,
    backgroundColor: '#E3EAEC',
  },
  button: {
    backgroundColor: '#098FA8',
    width: '80%',
    height: '8%',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  txtButton: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Optima',
  },
  divider: {
    width: '75%',
    marginVertical: 10,
  },
  icon: {
    flexDirection: 'row',
  },
  img: {
    width: 33,
    height: 33,
    //marginRight: 20,
  },
  selectGender: {
    width: '90%',
  },
});
export const signIn = StyleSheet.create({
  txt: {
    width: '80%',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 30,
    textAlign: 'center',
    fontFamily: 'Optima',
  },
  txtTouchId: {
    color: '#098FA8',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 10,
    fontFamily: 'Optima',
  },
  touchID: {
    flexDirection: 'row',
    backgroundColor: '#E2F7FD',
    width: '80%',
    height: '9%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  errorNull: {
    fontSize: 12,
    color: 'red',
    width: '100%',
    left: 32,
    top: -10,
  },
  banner: {
    alignSelf: 'center',
    marginLeft: 6,
    marginTop: -13,
    borderBottomLeftRadius: 10,
  },
  logo: {
    //backgroundColor:'red',
    position: 'absolute',
    top: 30,
    left: 20,
  },
  gender: {
    backgroundColor: 'red',
    top: 25,
    width: 314,
    height: 65,
    left: -10,
  },
  touchGender: {
    padding: 10,
    width: 300,
  },
  showGender: {
    borderColor: '#00AEBB',
    borderWidth: 1,
  },
  // render custom tabbar
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    width: width,
    height: '15%',
    justifyContent: 'space-between',
    backgroundColor: '#098FA8',
    borderBottomLeftRadius: 30,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06839A',
    borderRadius: 10,
    width: '65%',
    height: 50,
  },
  tabBar: {
    //flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '43%',
    padding: 10,
    //marginRight:-20,
    borderRadius: 10,
  },
  txtForgot: {
    color: '#098FA8',
    fontSize: 14,
    fontFamily: 'Optima',
  },
  txtTab: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Optima',
  },
  logo2: {
    marginLeft: 15,
  },
  touchForgot: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});

export const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
