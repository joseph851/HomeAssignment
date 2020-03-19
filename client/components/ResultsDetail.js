import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: result.logo,
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    alignContent: 'center',
    marginLeft: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    marginLeft: 15,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  text: {
    marginLeft: 20,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ResultsDetail;
