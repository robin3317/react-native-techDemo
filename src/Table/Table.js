import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { COLUMN_DB, PEOPLE_DB } from '../DB/Database';

const data = [
  { key: COLUMN_DB[0] },
  { key: COLUMN_DB[1] },
  { key: COLUMN_DB[2] },
  { key: PEOPLE_DB[0].name },
  { key: PEOPLE_DB[0].age },
  { key: PEOPLE_DB[0].country },
  { key: PEOPLE_DB[1].name },
  { key: PEOPLE_DB[1].age },
  { key: PEOPLE_DB[1].country },
  { key: PEOPLE_DB[2].name },
  { key: PEOPLE_DB[2].age },
  { key: PEOPLE_DB[2].country },
  { key: PEOPLE_DB[3].name },
  { key: PEOPLE_DB[3].age },
  { key: PEOPLE_DB[3].country },
  { key: PEOPLE_DB[4].name },
  { key: PEOPLE_DB[4].age },
  { key: PEOPLE_DB[4].country },
  { key: PEOPLE_DB[5].name },
  { key: PEOPLE_DB[5].age },
  { key: PEOPLE_DB[5].country },
  { key: PEOPLE_DB[6].name },
  { key: PEOPLE_DB[6].age },
  { key: PEOPLE_DB[6].country }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class Table extends React.Component {
  renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    //margin: 1,
    height: 27
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  itemText: {
    color: '#000'
  }
});
