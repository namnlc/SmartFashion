import React, {Component, useState} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import america from '../../res/images/welcome/flags/america.png';
import vietnam from '../../res/images/welcome/flags/vietnam.png';
import japan from '../../res/images/welcome/flags/japan.png';
import arrowLeft from '../../res/images/welcome/flags/arrowleft.png';
import arrowRight from '../../res/images/welcome/flags/arrowright.png';


const ToggleFlags = () => {

    const [isExpand, setIsExpand] = useState(true);
    const [isSelected, setIsSelected] = useState(1);

    return (
        <View style={[styles.regionImg, {paddingRight: 20}]}>
            <TouchableOpacity
                onPress={() => setIsSelected(1)}
                style={[isExpand === true ? {marginRight: 20} : null,
                    isSelected === 1 ? styles.touchFlags : null,
                    (isSelected === 2 && isExpand === false) || (isSelected === 3 && isExpand === false) ? {display: 'none'} : null]}
            >
                <Image source={america}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setIsSelected(2)}
                style={[isExpand === true ? {marginRight: 20} : null,
                    isSelected === 2 ? styles.touchFlags : null,
                    (isSelected === 1 & isExpand === false) || (isSelected === 3 && isExpand === false) ? {
                        display: 'none',
                        margin: 0,
                    } : null]}
            >
                <Image source={(japan)}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setIsSelected(3)}
                style={[
                    isSelected === 3 ? styles.touchFlags : null,
                    (isSelected === 1 && isExpand === false) || (isSelected === 2 && isExpand === false) ? {display: 'none'} : null]}
            >

                <Image source={(america)}/>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingLeft: 15}}
                              onPress={() => setIsExpand(!isExpand)}
            >

                <Image source={isExpand === false ? arrowRight : arrowLeft}/>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    touch: {},
    touchFlags: {
        borderColor: '#098FA8',
        borderWidth: 1,
        borderRadius: 20,
    },
    regionImg: {
        position: 'absolute',
        top: 5,
        left: 10,
        height: '5%',
        backgroundColor: '#F0ECF0',
        padding: 10,
        borderRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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

});

export default ToggleFlags;


