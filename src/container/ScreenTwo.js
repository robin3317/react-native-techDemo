import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
    const { bodyStyle, headerStyle } = styles;
    return (
      <View style={bodyStyle}>
        <View style={headerStyle}>
          <Text>Screen 2</Text>
        </View>
      </View>
    );
  }
}
