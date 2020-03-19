import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {useHistory} from 'react-router-native';
import {useState, useEffect} from 'react';
import {getList} from '../../client/actions/product';
import {connect} from 'react-redux';

const ResultsList = ({getList, list, loading, title}) => {
  const [num, setNum] = useState(10);

  useEffect(() => {
    getList(num, title);
    setNum(num + 10);
  }, [getList]);

  const history = useHistory();
  const handleReached = () => {
    getList(num, title);
  };

  return loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        onEndReached={handleReached}
        onEndReachedThreshold={0.5}
        horizontal
        data={list}
        keyExtractor={result => result._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => history.push(`/result/${item._id}`)}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    backgroundColor: 'lightgrey',
    marginBottom: 10,
  },
});

const mapStateToProps = (state, ownProps) => ({
  list: eval(`state.${ownProps.title}.products`),
  loading: eval(`state.${ownProps.title}.loading`),
});

export default connect(mapStateToProps, {getList})(ResultsList);
