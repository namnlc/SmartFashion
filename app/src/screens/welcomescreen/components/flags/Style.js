import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  touch: {},
  touchFlags: {
    borderRadius: 20,
  },
  regionImg: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    padding: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnSelected: {
    borderColor: '#098FA8',
    borderWidth: 1,
  },
  notSelected: {
    borderWidth: 2,
    borderColor: '#f0ecf0',
    borderRadius: 25,
  },
  hide: {
    display: 'none',
  },
  imgFlags: {
    width: 25,
    height: 25,
  },
  expandArrow: {
    justifyContent: 'center',
  },
  flag: {
    paddingLeft: 20,
  },
});
