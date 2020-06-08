import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
} from 'react-native';
import propTypes from 'prop-types';
import {ViewPropTypes} from 'react-native';
import wel from '../../res/images/welcome/welcome2.png';
import wel1 from '../../res/images/welcome/welcome3.png';
import man from '../../res/images/welcome/man.png';
import girl from '../../res/images/welcome/girl.png';
import {useNavigation} from '@react-navigation/core';
import Modal from 'react-native-modal';

let {width} = Dimensions.get('window');

class Tab extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                style={this.props.styleTab}
                activeOpacity={1}
                onPress={this.props.onPress}>
                <Text style={this.props.styleText}
                >{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

Tab.propTypes = {
    onPress: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    //color: propTypes.string,
    styleText: Text.propTypes.style ,
    styleTab: ViewPropTypes.style,
};

class ToggleModel extends Component {
    state = {
        active: 0,
        xPhoto: 0,
        xModel: 0,
        translateX: new Animated.Value(0),
        translateXPhoto: new Animated.Value(0),
        translateXModel: new Animated.Value(width),
        translateY: -1000,
        isVisible: false,
    };

    toggleModal(isVisible) {
        this.setState({isVisible: isVisible});
    }

    handleSlide = type => {
        let {
            active,
            translateX,
            translateXPhoto,
            translateXModel,
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: false,
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXPhoto, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: false,
                }).start(),
                Animated.spring(translateXModel, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: false,
                }).start(),
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXPhoto, {
                    toValue: -width,
                    duration: 100,
                }).start(),
                Animated.spring(translateXModel, {
                    toValue: 0,
                    duration: 100,
                }).start(),
            ]);
        }
    };

    render() {
        let {
            xPhoto,
            xModel,
            active,
            translateXPhoto,
            translateXModel,
            translateY,
        } = this.state;
        const {} = this.props;
        return (
            <View style={styles.container}>
                <View
                    style={styles.viewTabs}>
                    <View style={styles.tabs}>
                        <Tab
                            title="Upload a photo"
                            styleText={[styles.txt,{color : active === 0 ? '#FFFFFF' : '#098FA8'}]}
                            styleTab={[
                                {backgroundColor: active === 0 ? '#098FA8' : '#E2F7FD'},
                                styles.tab,
                            ]}
                            onPress={() =>
                                this.setState({active: 0}, () => this.handleSlide(xPhoto))
                            }
                            onLayout={event =>
                                this.setState({
                                    xPhoto: event.nativeEvent.layout.x,
                                })
                            }
                        />
                        <Tab
                            title="Pick a Model"
                            styleText={[styles.txt, {color: active === 0 ? '#098FA8' : "#ffffff"}]}
                            styleTab={[
                                {backgroundColor: active === 0 ? '#E2F7FD' : '#098FA8'},
                                styles.tab,
                            ]}
                            onPress={() =>
                                this.setState({active: 1}, () => this.handleSlide(xModel))
                            }
                            onLayout={event =>
                                this.setState({
                                    xModel: event.nativeEvent.layout.x,
                                })
                            }
                        />
                    </View>
                </View>

                <ScrollView>
                    <Animated.View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: [
                                {
                                    translateX: translateXPhoto,
                                },
                            ],
                        }}
                        onLayout={event =>
                            this.setState({
                                translateY: event.nativeEvent.layout.height,
                            })
                        }>
                        <Image source={wel}/>
                        <Modal isVisible={this.state.isVisible}>
                            <View
                                style={styles.containerModal}>
                                <View
                                    style={styles.modal}>
                                    <View style={styles.viewModal}>
                                        <TouchableOpacity style={{paddingRight: 60}}>
                                            <Image source={girl}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Image source={man}/>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.btnModal}/>
                                    <View style={styles.underModal}>
                                        <TouchableOpacity
                                            style={[styles.touchModal, {backgroundColor: '#E2F7FD'}]}
                                            activeOpacity={0.5}
                                            onPress={() => {
                                                this.toggleModal(this.setState.isVisible);
                                            }}
                                        >
                                            <Text style={[styles.txt, styles.txtChange]}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[styles.touchModal, {backgroundColor: '#098FA8', marginLeft: 15}]}
                                            activeOpacity={0.5}
                                            onPress={() => {
                                                this.setState({isVisible: true});
                                            }}>
                                            <Text style={styles.txtModal}>
                                                Take a photo
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity
                            style={styles.pickGender}
                            activeOpacity={0.5}
                            onPress={() => {
                                this.toggleModal(!this.setState.isVisible);
                            }}>
                            <Text style={[styles.txt, styles.txtPick]}>
                                Pick a gender & take a photo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.pickGender, styles.changeLater]}
                            activeOpacity={0.5}>
                            <Text style={[styles.txt, styles.txtChange]}>Change later</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            transform: [
                                {
                                    translateX: translateXModel,
                                },
                                {
                                    translateY: -translateY,
                                },
                            ],
                        }}>
                        <Image source={wel1}/>

                        <View style={styles.model}>
                            <TouchableOpacity style={styles.pickModel} activeOpacity={0.5}>
                                <Text style={[styles.txt, styles.txtPick]}>
                                    Pick this model
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.pickModel, styles.changeModel]}
                                activeOpacity={0.5}>
                                <Text style={[styles.txt, styles.txtChange]}>Change later</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerModal: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    viewTabs: {
        alignItems: 'center',
        borderRadius: 25,
        paddingBottom: 20,
    },
    tabs: {
        height: 50,
        width: '80%',
        //borderBottomWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#E2F7FD',
        borderRadius: 25,
        position: 'relative',
    },
    tab: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor:"#098FA8",
        height: '100%',
        borderRadius: 25,
    },
    modal: {
        width: 312,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    viewModal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    underModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    btnModal: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#f2f2f2',
        marginBottom: 20,
    },
    touchModal: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 130,
        height: 40,
    },
    txtModal: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
    },
    txt: {
        fontWeight: 'bold',
        //fontFamily:'poppins'
    },
    txtPick: {
        fontWeight: 'bold',
        color: '#fff',
    },
    txtChange: {
        fontWeight: 'bold',
        color: '#098FA8',
    },
    pickGender: {
        backgroundColor: '#098FA8',
        padding: 20,
        borderRadius: 25,
        marginTop: 20,
        width: '80%',
    },
    model: {
        flexDirection: 'row',
        paddingTop: 20,
    },
    pickModel: {
        backgroundColor: '#098FA8',
        //width:'50%',
        borderRadius: 25,
        padding: 20,
        marginTop: 20,
    },
    changeModel: {
        backgroundColor: '#E0F1F6',
        borderRadius: 25,
        padding: 20,
        marginLeft: 10,
    },
    changeLater: {
        backgroundColor: '#E0F1F6',
        marginTop: 10,
        alignItems: 'center',
    },
});

export default function (props) {
    const navigation = useNavigation();
    return <ToggleModel {...props} navigation={navigation}/>;
}
