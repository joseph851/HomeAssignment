import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './client/Sagas/sagas';
import rootReducers from './client/reducers/reducers';
import search from './src/screens/SearchScreen';
import Result from './src/screens/ResultsShowScreen';
import SearchResult from './src/screens/SearchResult';
import Photo from './src/screens/Photo';
import {NativeRouter, Route, Switch} from 'react-router-native';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={search} />
            <Route exact path="/search" component={search} />
            <Route exact path="/result/:id" component={Result} />
            <Route exact path="/search/:name" component={SearchResult} />
            <Route exact path="/photo/" component={Photo} />
          </Switch>
        </NativeRouter>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
