import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button';
import Button2 from '../components/Button2';
import Card from './../components/Card';

export default class ScreenOne extends Component {
  render() {
    const styles = {
      bodyStyle: { backgroundColor: '#343137', flex: 1 },
      headerStyle: { backgroundColor: '#F9C648', height: 430 },
      headingTextStyle: { color: '#fff', fontSize: 23, fontWeight: '500' },
      headingRowStyle: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      commonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
      },
      partiStyle: {
        marginLeft: 15,
        backgroundColor: '#53ADA2',
        borderRadius: 50,
        height: 20,
        width: 20,
        fontSize: 14,
        paddingLeft: 5
      },
      partiTextStyle: { fontSize: 16, fontWeight: 'bold' }
    };
    const {
      bodyStyle,
      headerStyle,
      headingTextStyle,
      headingRowStyle,
      commonStyle,
      partiStyle,
      partiTextStyle
    } = styles;
    const addUserHandler = () => {};
    return (
      <View style={bodyStyle}>
        <View style={headerStyle}>
          <View style={headingRowStyle}>
            <Image source={require('../asset/leftArrow.png')} />
            <Text style={headingTextStyle}>STANDING 30 METERS</Text>
            <Button onPress={addUserHandler}>+ADD</Button>
          </View>
          <View style={commonStyle}>
            <Text style={partiTextStyle}>Participants</Text>
            <Text style={partiStyle}>1</Text>
          </View>
          <View style={commonStyle}>
            <Card />
          </View>
          <View style={commonStyle}>
            <Button2>START TEST</Button2>
          </View>
        </View>
      </View>
    );
  }
}
