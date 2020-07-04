import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Input} from '@ui-kitten/components';
import {signUp} from '../signscreen/Style';

const ForgotPassword = ({navigation: {goBack}}) => {
  const [username, setUserName] = React.useState('');
  const [active, setActive] = useState('false');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="font-awesome"
          name="chevron-left"
          size={18}
          onPress={() => goBack()}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Forgot Password ?
        </Text>
        <View />
      </View>
      <View style={{flex: 4, marginHorizontal: 20}}>
        <Text style={styles.txt}>Please your enter Email</Text>
        <Input
          size="medium"
          placeholder="Email"
          value={username}
          placeholderTextColor="#696969"
          onChangeText={(nextValue) => setUserName(nextValue)}
          onChange={(active) => setActive(!active)}
        />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          backgroundColor: active ? '#E1E2E2' : '#098FA8',
          padding: 20,
          width: '60%',
          borderRadius: 10,
          marginBottom: 25,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: active ? 'black' : 'white',
            fontSize: 15,
          }}>
          {active ? 'Send Request' : 'Get a code'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  //txtInput: {},
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    top: 10,
  },
  txt: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 30,
  },
});

export default ForgotPassword;
