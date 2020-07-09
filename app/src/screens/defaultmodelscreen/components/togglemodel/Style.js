import {StyleSheet, Dimensions} from 'react-native';
let {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  viewTabs: {
    width: width - 20,
    alignItems: 'center',
    borderRadius: 25,
  },
  tabs: {
    height: '8%',
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#E2F7FD',
    borderRadius: 25,
  },
  tab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: width - 20,
    height: height / 3,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
  },
  viewModal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  underModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnModal: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    marginVertical: 20,
  },
  touchModal: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: width / 3,
    height: '50%',
  },
  txtModal: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'optima',
  },
  txt: {
    fontWeight: 'bold',
    fontFamily: 'optima',
  },
  txtPick: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  txtChange: {
    fontWeight: 'bold',
    color: '#098FA8',
  },
  pickGender: {
    backgroundColor: '#098FA8',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: width - 100,
  },
  model: {
    flexDirection: 'row',
    paddingTop: 20,
  },

  changeModel: {
    backgroundColor: '#E0F1F6',
    borderRadius: 25,
    padding: 20,
    marginLeft: 10,
  },
  changeLater: {
    backgroundColor: '#E0F1F6',
    marginTop: 10,
    paddingHorizontal: 70,
    alignItems: 'center',
  },
  render: {
    alignItems: 'center',
  },
  img: {
    width: width,
    height: height / 2,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

export {styles};
