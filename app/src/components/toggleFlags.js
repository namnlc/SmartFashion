import React, {Component} from 'react';
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
import arrowLeft from '../../res/images/welcome/flags/arrow.png';
import arrowRight from '../../res/images/welcome/flags/arrowleft.png'

// mobx 
import { observable } from 'mobx';
import { observer } from 'mobx-react';

 export default class ToggleFlags extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded:true,
    };
    this.icons = { 
      'expand': arrowLeft,
      'collapse': arrowRight,
    }
  }

  toggleFlags() {
    this.setState({
      hide : !this.state.hide
    });
  }


  render() {

    let{ active } = this.state;
    let icon = this.icons['collapse']
    if (this.state.expanded)
    return (
      <View style={styles.regionImg}>
          <TouchableOpacity  style={styles.btnSelected}
          >
              <Image source={(america)}/>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.notSelected}
          >
              <Image source={(japan)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notSelected}>
              <Image source={(america)} />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft:10}}
          
          >
            <Image source={active===0 ? arrowLeft : arrowRight}/>
          </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  touch: {},
  regionImg: {
    position: 'absolute',
    top: 5,
    left: 10,
    //width: '45%',
    height:"5%",
    backgroundColor:'#F0ECF0',
    padding: 10,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnSelected:{
    borderColor:'#098FA8',
  },
  notSelected:{
    borderWidth:2,
    borderColor:"#f0ecf0",
    borderRadius:25,
  },
  hide:{
    display:'none'
  }

});
