import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import touchId from '../../../../res/images/touchid.png';
import Divider from 'react-native-divider';
import * as React from 'react';
import * as eva from '@eva-design/eva';
import {useEffect} from 'react';
import {signUp, styles, signIn} from './Style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useStores} from '../../../stores/Store';
import {Icon} from 'react-native-elements';
import {Input, ApplicationProvider, IndexPath} from '@ui-kitten/components';
import RenderSignUp from './SignUpView';
import {useNavigation} from '@react-navigation/native';

const RenderSignIn = () => {
  const navigation = useNavigation();
  const onSubmit = data => {
    Alert.alert('FormData', JSON.stringify(data));
  };
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const {signStore} = useStores();
  console.log(signStore.isLoggedIn);
  React.useEffect(() => {
    signStore.onPressLogin();
    console.log(signStore.isLoggedIn);
  }, [signStore]);
  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        type="material"
        name={secureTextEntry ? 'visibility-off' : 'visibility'}
        color="#BEBEBE"
      />
    </TouchableWithoutFeedback>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={true}>
        <Text style={signIn.txt}>
          Sign In or Sign Up to unlock and explore more features with Smart
          Fashion!
        </Text>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
          }}>
          <Input
            size="medium"
            placeholder="Email"
            value={username}
            placeholderTextColor="#696969"
            style={signUp.txtInput}
            //secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setUserName(nextValue)}
          />
          <Input
            style={signUp.txtInput}
            value={password}
            size="medium"
            placeholderTextColor="#696969"
            placeholder="Password"
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
          />
          <TouchableOpacity style={styles.touchForgot}>
            <Text style={styles.txtForgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUp.button}
            onPress={() => navigation.navigate('primaryNavigator')}>
            <Text style={signUp.txtButton}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signIn.touchID}>
            <Image source={touchId} />
            <Text style={signIn.txtTouchId}>Touch ID</Text>
          </TouchableOpacity>
          <View style={signUp.divider}>
            <Divider orientation="center" color="#696969">
              Or
            </Divider>
          </View>
          <View style={signUp.icon}>
            <Icon
              type="font-awesome"
              name="facebook"
              color="#396AD6"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
            <Icon
              type="font-awesome"
              name="google"
              color="#FC5253"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
            <Icon
              type="font-awesome"
              name="twitter"
              color="#02B3F8"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
            <Icon
              type="font-awesome"
              name="apple"
              color="black"
              onPress={() => console.log('ahihi')}
              reverseColor="white"
              reverse={true}
              size={20}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RenderSignIn;
