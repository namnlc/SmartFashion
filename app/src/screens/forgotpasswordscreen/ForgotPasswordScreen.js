import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import {styles} from './Style';
const ForgotPassword = ({navigation: {goBack}}) => {
  const [username, setUserName] = React.useState('');
  const [active, setActive] = useState('false');
  const [label, setLabel] = useState('');
  const [holder, setHolder] = useState('Email*');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          type="font-awesome"
          name="chevron-left"
          size={18}
          onPress={() => goBack()}
        />
        <Text style={styles.txt}>Forgot Password ?</Text>
        <View />
      </View>
      <View style={styles.content}>
        <Text style={[styles.txt, styles.txHeader]}>
          Please your enter Email
        </Text>
        <Input
          size="medium"
          placeholder={holder}
          value={username}
          label={label}
          placeholderTextColor="#696969"
          onChangeText={(nextValue) => setUserName(nextValue)}
          onFocus={() => {
            setLabel('Email Address');
            setHolder('');
          }}
          labelStyle={styles.txLabel}
          inputStyle={styles.txInput}
        />
        <Button
          title="Send Reset"
          titleStyle={[styles.txButton]}
          buttonStyle={[styles.btn]}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
