import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = props => {
  const { cardStyle, imageStyle, subTitleStyle, nameStyle } = styles;
  console.log(props.user);
  return (
    <View style={cardStyle}>
      <Image style={imageStyle} source={require('../asset/user.png')} />
      <View>
        <Text style={nameStyle}>{props.user.name}</Text>
        <Text style={subTitleStyle}>{props.user.distance}</Text>
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
