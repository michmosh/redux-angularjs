
const middleware = function(store){
    return function(next){
       return function(action){
           // some async code
           action.payload = {
              data: asyncResponse
           };
 
           next(action)
       }
    }
 }
 
 // or using ES6 arrow functions
//  const middleware = store => next => action => {
//      next(action);
//  };