import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import ToggleFlags from '../components/ToggleFlags';
import welcome from '../../res/images/welcome/welcome.png';

const WelcomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <ToggleFlags/>
                <View style={styles.body}>
                    <View style={styles.img}>
                        <Image source={welcome}/>
                        <Text style={styles.txt}>Smarten up your Style!</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={0.4} style={styles.btn}
                                          onPress={() => navigation.navigate('defaultModel')}
                        >
                            <Text style={styles.txtStart}>
                                Start
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.txt2}>Try on everything on Smart Fashion</Text>
                        <Text style={styles.txt2}>Be fashionable with our Stylish feature</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#000'
    },
    body: {
        position: 'relative',
        //backgroundColor:"#000"
    },
    btn: {
        backgroundColor: '#098FA8',
        borderRadius: 25,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 184,
    },
    txt: {
        //fontFamily:'poppins',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    txtStart: {
        color: '#fff',
        fontSize: 16,
    },
    img: {
        marginTop: 0,
    },

    txt2: {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 5,
    },
});

export default WelcomeScreen;
