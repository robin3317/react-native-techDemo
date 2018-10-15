import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Table from './../Table/Table';
import { BUTTON_DB } from '../DB/Database';
import { getRandomColor } from '../Util/Util';

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
  },
  addStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  tableStyle: {
    marginLeft: 10,
    marginRight: 10
  },
  plusStyle: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    color: '#fff'
  }
};

export default class ScreenTwo extends Component {
  static navigationOptions = () => ({
    title: 'Screen 2',
    headerStyle: { backgroundColor: '#16a085' },
    headerTitleStyle: { color: 'white' }
  });

  //-----------------------
  state = { buttonList: [], clickedNumber: 1, colorArray: [] };

  handleClick = () => {
    console.log('clicked');
    const db = BUTTON_DB;
    const items = db.slice(0, this.state.clickedNumber);
    let randomColor = getRandomColor();
    if (_.includes(this.state.colorArray, randomColor)) {
      randomColor = getRandomColor();
    }
    console.log(randomColor);
    this.setState({
      buttonList: [...items],
      clickedNumber: this.state.clickedNumber + 1,
      colorArray: this.state.colorArray.concat(randomColor)
    });
    console.log(this.state.buttonList);
  };

  renderColoredButton = (button, key) => (
    <TouchableOpacity
      color="inherit"
      key={key}
      style={{ borderColor: this.state.colorArray[key] }}
    >
      <Text
        style={{
          color: this.state.colorArray[key],
          borderWidth: 1,
          borderRadius: 4,
          borderColor: this.state.colorArray[key],
          padding: 7,
          marginRight: 7
        }}
      >
        {button.name}
      </Text>
    </TouchableOpacity>
  );

  render() {
    const {
      bodyStyle,
      headerStyle,
      headingTextStyle,
      headingRowStyle,
      hrStyle,
      fontStyle,
      addStyle,
      tableStyle,
      plusStyle
    } = styles;
    return (
      <ScrollView style={bodyStyle}>
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
        <View style={addStyle}>
          {this.state.buttonList.map((button, index) =>
            this.renderColoredButton(button, index)
          )}

          <TouchableOpacity onPress={this.handleClick}>
            <Text style={plusStyle}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={tableStyle}>
          <Table />
        </View>
      </ScrollView>
    );
  }
}
