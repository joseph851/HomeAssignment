import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useLocation} from 'react-router-native';

const Photo = ({history}) => {
  const prop = useLocation();
  return (
    <>
      <Image style={styles.image} source={{uri: prop.url}} />
      <TouchableOpacity
        onPress={() => history.push(`/result/${prop.id}`)}
        style={styles.touch}>
        <Text style={{color: 'black', fontSize: 16}}>Back</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 20,
  },
  touch: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Photo;
