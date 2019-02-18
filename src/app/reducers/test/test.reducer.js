
const initialState = {counter: 0 , list:[], resetFiter: true};
export function TestReducer(state = initialState , action){
    switch(action.type){
        case 'TEST_ADD':
      
            return {list:action.payload}
        case "TEST_2_ADD":
      
            return {counter:state.counter + action.payload};
        case "ERROR":
          
                return {error:action.payload};
        default:
            return state;
    }
}