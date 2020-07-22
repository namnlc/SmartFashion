import styled from 'styled-components';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    width: width / 2,
  },
  img: {
    display: 'flex',
    height: height / 3,
    alignSelf: 'stretch',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

const CardView = styled.View``;

const ImageView = styled.Image`
  /* flex: 1; */
  justify-content: center;
`;

const Title = styled.Text`
  font-family: optima;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 0;
`;

const FooterView = styled.View`
  background-color: green;
  /* width: 50%; */
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-family: optima;
  font-size: 14px;
`;
export {CardView, ImageView, Title, FooterView, Name, styles};
