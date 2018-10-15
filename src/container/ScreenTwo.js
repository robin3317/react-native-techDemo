import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Table from './../Table/Table';

const styles = {
  bodyStyle: { backgroundColor: '#343137', flex: 1 },
  headerStyle: { backgroundColor: '#F9C648', height: 150 },
  headingTextStyle: { color: '#fff', fontSize: 24, fontWeight: '500' },
  headingRowStyle: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  hrStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 80,
    marginTop: 15,
    marginBottom: 2,
    marginLeft: 142
  },
  fontStyle: {
    fontWeight: 'bold'
  }
};

export default class ScreenTwo extends Component {
  static navigationOptions = () => ({
    title: 'Screen 2',
    headerStyle: { backgroundColor: '#16a085' },
    headerTitleStyle: { color: 'white' }
  });

  render() {
    const {
      bodyStyle,
      headerStyle,
      headingTextStyle,
      headingRowStyle,
      hrStyle,
      fontStyle
    } = styles;
    return (
      <View style={bodyStyle}>
        <View style={headerStyle}>
          <View style={headingRowStyle}>
            <Text style={headingTextStyle}>ODAIN ROSE</Text>
          </View>
          <View style={hrStyle} />
          <View style={headingRowStyle}>
            <Text style={fontStyle}>30m sprint</Text>
            <Text style={fontStyle}>
              <Image source={require('../asset/calendar.png')} />
              11-12-2017
            </Text>
            <Text style={fontStyle}>
              <Image source={require('../asset/timer.png')} />
              09:30
            </Text>
          </View>
        </View>
        <Table />
      </View>
    );
  }
}
