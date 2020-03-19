import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ResultsDetail from '../../client/components/ResultsDetail';
import {getSearch} from '../../client/actions/product';
import {connect} from 'react-redux';

const SearchResult = ({getSearch, search, history, match}) => {
  useEffect(() => {
    getSearch(match.params.name);
  }, [getSearch]);

  const backButton = (
    <TouchableOpacity
      onPress={() => history.push('/search')}
      style={styles.touch}>
      <Text style={{color: 'black', fontSize: 16}}>Back</Text>
    </TouchableOpacity>
  );
  if (!search[0])
    return (
      <View style={styles.top}>
        <Text style={styles.text}>Item Not Found</Text>
        {backButton}
      </View>
    );
  else
    return (
      <>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => history.push(`/result/${search[0]._id}`)}>
            <ResultsDetail result={search[0]} />
          </TouchableOpacity>
          {backButton}
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
    marginTop: 10,
  },
  top: {
    backgroundColor: 'lightgrey',
    flex: 1,
    borderRadius: 4,
  },
  touch: {
    width: '100%',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  search: state.Search.search,
});
export default connect(mapStateToProps, {getSearch})(SearchResult);
