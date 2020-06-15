import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ViewPropTypes,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Button = props => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
const TabBar = createReactClass({
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
    activeViewColor: PropTypes.string,
    inactiveViewColor: PropTypes.string,
  },

  getDefaultProps() {
    return {
      activeTextColor: '#098FA8',
      inactiveTextColor: 'white',
      backgroundColor: null,
      activeViewColor: 'white',
      inactiveViewColor: '#2F9FB5',
    };
  },

  renderTabOption(name, page) {},

  renderTab(name, page, isTabActive, onPressHandler) {
    const {
      activeTextColor,
      inactiveTextColor,
      activeViewColor,
      inactiveViewColor,
      textStyle,
    } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const viewColor = isTabActive ? activeViewColor : inactiveViewColor;
    return (
      <Button
        style={{flex: 1}}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <View
          style={[
            styles.tab,
            this.props.tabStyle,
            {backgroundColor: viewColor},
          ]}>
          <Text style={[{color: textColor, fontWeight}, textStyle]}>
            {name}
          </Text>
        </View>
      </Button>
    );
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
      <ScrollView
        // style={[
        //   styles.tabs,
        //   {backgroundColor: this.props.backgroundColor},
        //   this.props.style,
        // ]}
        //style={{width:'82%'}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [{translateX}],
            },
            this.props.underlineStyle,
          ]}
        />
      </ScrollView>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 125,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 25,
  },
  tabs: {
    height: 60,
    width: '82%',
    flexDirection: 'row',
    //justifyContent: 'flex-end',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
    //position: 'relative'
  },
});

module.exports = TabBar;

export default TabBar;
