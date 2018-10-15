import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
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
    marginLeft: 28
  },
  partiTextStyle: { fontSize: 16, fontWeight: 'bold' },
  hrStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 120,
    marginTop: 8,
    marginBottom: 2,
    marginLeft: 110
  }
};

export default class ScreenOne extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Screen 1',
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Screen2');
        }}
        style={{
          height: 35,
          width: 35,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(250, 250, 250, 0.7)',
          borderRadius: 50,
          margin: 5,
          shadowColor: 'black',
          shadowOpacity: 0.5,
          shadowOffset: { width: 2, height: 2 }
        }}
      >
        <Text style={{ fontSize: 25, color: '#2980b9' }}>2</Text>
      </TouchableOpacity>
    ),
    headerStyle: { backgroundColor: '#16a085' },
    headerTitleStyle: { color: 'white' }
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
  //renderCard = item => <Card user={item} />;
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
      cardStyle,
      hrStyle
    } = styles;

    return (
      <ScrollView style={bodyStyle}>
        <View style={headerStyle}>
          <View style={headingRowStyle}>
            <Image source={require('../asset/leftArrow.png')} />
            <Text style={headingTextStyle}>STANDING 30 METERS</Text>
            <Button onPress={this.addUserHandler}>+ADD</Button>
          </View>
          <View style={hrStyle} />
          <View style={commonStyle}>
            <Text style={partiTextStyle}>Participants</Text>
            <Text style={partiStyle}>{this.state.participantsList.length}</Text>
          </View>
          <View style={cardStyle}>
            <FlatList
              data={this.state.participantsList}
              renderItem={({ item }) => <Card user={item} />}
              keyExtractor={(item, index) => index.toString()}
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
