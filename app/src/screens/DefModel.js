import React from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import ToggleModel from '../components/ToggleModel';

const DefModel = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <Text style={styles.txtDef}>
                First of all, let's create your own model!
            </Text>
            <ToggleModel>
            </ToggleModel>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtDef: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 40,
        paddingBottom: 20,
    },
});

export default DefModel;
