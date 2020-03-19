import {combineReducers} from 'redux';

//list of all reducers
import Search from './Search';
import Social from './Social';
import Communication from './Communication';
import Entertainment from './Entertainment';
import Games from './Games';
import Health from './Health';
import Page from './productPage';

export default combineReducers({
  Search,
  Social,
  Communication,
  Entertainment,
  Games,
  Health,
  Page,
});
