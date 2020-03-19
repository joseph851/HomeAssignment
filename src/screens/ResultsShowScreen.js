import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {setLoad, getResult} from '../../client/actions/product';
import {connect} from 'react-redux';

const ResultsShowScreen = ({
  result,
  getResult,
  setLoad,
  history,
  match,
  loading,
}) => {
  useEffect(() => {
    setLoad();
    getResult(match.params.id);
  }, [getResult]);

  return loading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.box}>
      <ScrollView style={styles.top}>
        <Text style={styles.head}>{result.name}</Text>
        <Text style={styles.cat}>Category: {result.category}</Text>
        <Text style={styles.description}>{result.description}</Text>
        <FlatList
          horizontal
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  history.push({
                    pathname: '/photo',
                    url: item,
                    id: result._id,
                  })
                }>
                <Image style={styles.image} source={{uri: item}} />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => history.push('/search')}
        style={styles.touch}>
        <Text style={{color: 'black', fontSize: 16}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  touch: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  head: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 30,
  },
  cat: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    fontSize: 25,
    marginLeft: 10,
  },
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const mapStateToProps = state => ({
  result: state.Page.result,
  loading: state.Page.loading,
});

export default connect(mapStateToProps, {getResult, setLoad})(
  ResultsShowScreen,
);
