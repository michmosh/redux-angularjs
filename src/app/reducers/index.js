import { combineReducers } from 'redux';
import { TestReducer }  from './test/test.reducer';

const RootReducer = combineReducers({
    test: TestReducer
});

export default RootReducer;