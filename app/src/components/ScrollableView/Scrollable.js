import React from 'react';
import PropTypes from 'prop-types';
const createReactClass = require('create-react-class');
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ScrollableView = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    activeTabs: ViewPropTypes.style,
    inactiveTabs: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: 'black',
      inactiveTextColor: '#616161',
      backgroundColor: null,
    };
  },

  renderTabOption(name, page) {},

  renderTab(name, page, isTabActive, onPressHandler) {
    const {
      activeTextColor,
      activeTabs,
      inactiveTabs,
      inactiveTextColor,
      textStyle,
    } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const tabActive = isTabActive ? activeTabs : inactiveTabs;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <View style={[styles.tab, this.props.tabStyle, tabActive]}>
          <Text style={[{color: textColor, fontWeight}, textStyle]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  render() {
    //const containerWidth = this.props.containerWidth;
    // const numberOfTabs = this.props.tabs.length;
    // const tabUnderlineStyle = {
    //   position: 'absolute',
    //   //alignItems: 'center',
    //   width: containerWidth / numberOfTabs,
    //   height: 1,
    //   backgroundColor: 'black',
    //   bottom: 0,
    // };

    // const translateX = this.props.scrollValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, containerWidth / numberOfTabs],
    // });
    return (
      <View
        style={[
          styles.tabs,
          {width: this.props.width},
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
  container: {
    flex: 1,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#F2F2F2',
  },
});

export default ScrollableView;
