import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import Button from '../components/Button';
import Button2 from '../components/Button2';
import Card from './../components/Card';
import { PARTICIPANTS_DB } from '../DB/Database';

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
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 20
  },
  partiTextStyle: { fontSize: 16, fontWeight: 'bold' }
};

export default class ScreenOne extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Screen1',
    headerRight: (
      <Button
        title="Menu"
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
    )
  });
  state = { clickedNumber: 1, participantsList: [] };
  addUserHandler = () => {
    const db = PARTICIPANTS_DB;
    const items = db.slice(0, this.state.clickedNumber);
    console.log(items);
    this.setState(
      {
        participantsList: [],
        clickedNumber: this.state.clickedNumber + 1
      },
      () => {
        this.setState(prevState => ({
          participantsList: [...prevState.participantsList, ...items]
        }));
      }
    );
  };
  renderCard = item => <Card user={item} />;
  render() {
    console.log(this.props.navigation);
    const {
      bodyStyle,
      headerStyle,
      headingTextStyle,
      headingRowStyle,
      commonStyle,
      partiStyle,
      partiTextStyle,
      cardStyle
    } = styles;

    return (
      <ScrollView style={bodyStyle}>
        <View style={headerStyle}>
          <View style={headingRowStyle}>
            <Image source={require('../asset/leftArrow.png')} />
            <Text style={headingTextStyle}>STANDING 30 METERS</Text>
            <Button onPress={this.addUserHandler}>+ADD</Button>
          </View>
          <View style={commonStyle}>
            <Text style={partiTextStyle}>Participants</Text>
            <Text style={partiStyle}>{this.state.participantsList.length}</Text>
          </View>
          <View style={cardStyle}>
            <FlatList
              data={this.state.participantsList}
              renderItem={({ item }) => <Card user={item} />}
            />
          </View>
          <View style={commonStyle}>
            <Button2>START TEST</Button2>
          </View>
        </View>
      </ScrollView>
    );
  }
}
