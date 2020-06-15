import {StyleSheet} from 'react-native';

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
    //top: -10,
    width: '82%',
    height: 40,
    borderRadius: 6,
    backgroundColor: '#E3EAEC',
    paddingLeft: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#098FA8',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  txtButton: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
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
    marginRight: 20,
  },
});
export const signIn = StyleSheet.create({
  txt: {
    width: '80%',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 30,
    textAlign: 'center',
    //letterSpacing:0.1
  },
  txtTouchId: {
    color: '#098FA8',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  touchID: {
    flexDirection: 'row',
    backgroundColor: '#E2F7FD',
    width: '75%',
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  birth: {
    backgroundColor: 'red',
    left: -10,
    top: 22,
    zIndex: 1,
  },
  touchBirth: {
    flexDirection: 'row',
    width: '82%',
    marginHorizontal: 10,
    zIndex: -1,
  },
  touchMonth: {
    padding: 12.5,
    zIndex: -1,
    width: 110,
    marginRight: 10,
  },
  touchDay: {
    padding: 12.5,
    zIndex: -1,
    width: 82,
    marginRight: 12,
  },
  touchYear: {
    padding: 12.5,
    zIndex: -1,
    width: 91,
  },
  touchForgot: {
    width: '80%',
    flexDirection: 'row-reverse',
  },
  // render custom tabbar
  tabContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
    backgroundColor: '#098FA8',
    borderBottomLeftRadius: 28,
    zIndex: -1,
  },
  tabView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#06839A',
    borderRadius: 10,
    marginTop: 20,
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
    fontSize: 12,
  },
  txtTab: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo2: {
    top: 8,
    left: -10,
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
