import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  regionImg: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    padding: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notSelected: {
    borderWidth: 2,
    borderColor: '#f0ecf0',
    borderRadius: 25,
  },
  expandArrow: {
    justifyContent: 'center',
  },
});
