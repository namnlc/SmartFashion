import React from 'react';
import PropTypes from 'prop-types';
const createReactClass = require('create-react-class');
import {
  StyleSheet,
  Button,
  Text,
  View,
  Animated,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

const CustomBot = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null,
    };
  },

  renderTabOption(name, page) {},

  renderTab(name, page, isTabActive, onPressHandler) {
    const {activeTextColor, inactiveTextColor, textStyle} = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const border = isTabActive
      ? {borderBottomWidth: 2, alignSelf: 'center'}
      : null;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{flex: 1}}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <View style={[styles.tab, this.props.tabStyle, border]}>
          <Text style={[{color: textColor, fontWeight}, textStyle]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      //alignItems: 'center',
      width: containerWidth / numberOfTabs,
      height: 1,
      backgroundColor: 'black',
      bottom: 0,
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <View
        style={[
          styles.tabs,
          {backgroundColor: this.props.backgroundColor},
          this.props.style,
        ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        {/* <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [{translateX}],
            },
            this.props.underlineStyle,
          ]}
        /> */}
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  tabs: {
    height: 30,
    //width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    //borderColor: '#ccc',
  },
});

export default CustomBot;
