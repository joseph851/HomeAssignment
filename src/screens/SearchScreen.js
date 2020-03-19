import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import SearchBar from '../../client/components/SearchBar';
import ResultsList from '../../client/components/ResultsList';

const SearchScreen = ({history}) => {
  const [term, setTerm] = useState('');

  const handlepress = () => {
    history.push(`/search/${term}`);
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={handlepress}
        />
        <ResultsList title="Entertainment" />
        <ResultsList title="Games" />
        <ResultsList title="Social" />
        <ResultsList title="Communication" />
        <ResultsList title="Health" />
      </ScrollView>
      {/*delete the button
      <Button
        style={styles.scrollView}
        title="Sign Up"
        onPress={() => history.push('/')}
      />*/}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgrey',
  },
});

export default SearchScreen;
