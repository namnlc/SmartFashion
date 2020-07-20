import styled from 'styled-components';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  // img: {
  //   width: width / 4,
  //   height: height / 4,
  // },
  container: {
    display: 'flex',
    flex: 1,
    width: width / 3,
    height: height / 3,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

const CardView = styled.View``;

const ImageView = styled.Image`
  width: 100%;
  height: 200px;
`;

const Title = styled.Text`
  font-family: optima;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 30;
`;

const FooterView = styled.View`
  background-color: green;
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-family: optima;
  font-size: 14px;
`;
export {CardView, ImageView, Title, FooterView, Name, styles};
