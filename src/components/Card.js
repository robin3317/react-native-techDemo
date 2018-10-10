import React from 'react';
import { View, Text, Image } from 'react-native';

const user = [
  {
    name: 'Anders Anderson',
    height: '178cm - 85kg'
  },
  {
    name: 'Rock Johnson',
    height: '158cm - 75kg'
  },
  {
    name: 'Andrew Mead',
    height: '162cm - 65kg'
  },
  {
    name: 'Maximilliam Max',
    height: '175cm - 78kg'
  }
];

const Card = () => {
  const { cardStyle, imageStyle, subTitleStyle, nameStyle } = styles;
  return (
    <View style={cardStyle}>
      <Image style={imageStyle} source={require('../asset/user.png')} />
      <View>
        <Text style={nameStyle}>{user[0].name}</Text>
        <Text style={subTitleStyle}>{user[0].height}</Text>
      </View>
    </View>
  );
};

const styles = {
  cardStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 300,
    padding: 10,
    marginTop: 10
  },
  imageStyle: {
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 5
  },
  subTitleStyle: {
    fontSize: 12
  },
  nameStyle: {
    fontWeight: 'bold'
  }
};

export default Card;
