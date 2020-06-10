import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerModal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTabs: {
    width: '80%',
    alignItems: 'center',
    borderRadius: 25,
    paddingBottom: 20,
  },
  tabs: {
    height: 50,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E2F7FD',
    borderRadius: 25,
  },
  tab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRadius: 25,
  },
  modal: {
    width: 312,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  viewModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  underModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  btnModal: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f2f2f2',
    marginBottom: 20,
  },
  touchModal: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 130,
    height: 40,
  },
  txtModal: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  txt: {
    fontWeight: 'bold',
  },
  txtPick: {
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
    marginTop: 20,
    width: '80%',
  },
  model: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  pickModel: {
    backgroundColor: '#098FA8',
    borderRadius: 25,
    padding: 20,
    marginTop: 20,
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
    width: '100%',
  },
});

export {styles};
