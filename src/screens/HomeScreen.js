import React, {useState, useEffect} from 'react';
import {Button, ThemeProvider} from 'react-native-elements';
import {Avatar} from 'react-native-elements';
import {Container, Content, Form, Item, Input} from 'native-base';
import {connect} from 'react-redux';
import {signup} from '../../client/actions/product';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const HomeScreen = ({signup, history}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [photos, setPhotos] = useState('');

  const handlepress = () => {
    signup({name, price, category, description, logo});
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Input
            label="Name"
            placeholder="name"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="Price"
            placeholder="price"
            value={price}
            onChangeText={setPrice}
          />
          <Input
            label="Category"
            placeholder="category"
            value={category}
            onChangeText={setCategory}
          />
          <Input
            label="Description"
            placeholder="description"
            value={description}
            onChangeText={setDescription}
          />
          <Input
            label="Logo"
            placeholder="logo"
            value={logo}
            onChangeText={setLogo}
          />
          <Input
            label="Photos"
            placeholder="photos"
            value={photos}
            onChangeText={setPhotos}
          />
          <Button title="Sign up" onPress={handlepress} />
          <Button title="applist" onPress={() => history.push('/search')} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'grey',
  },
});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {signup})(HomeScreen);
