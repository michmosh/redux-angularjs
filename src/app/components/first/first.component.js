import TestActions from '../../actions/test/test.action'
const First = ()=>{
    return{
        restrict : 'E',
        template:require('../first/first.html'),
        controllerAs: 'firstCtrl',
        controller : FirstController
    }
}

class FirstController {
    constructor($ngRedux , $scope){
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TestActions)(this);
        this.list = [1,2,3,4,5,6,7];
        this.counter = 0 ;
    }
    testFunc(){
        this.testAdd([...this.list , 10]);
    }
    add(value){
        this.test2Add(value)
    }
    
    $onDestroy(){
        this.unsubscribe();
    }
    
   mapStateToThis(state){
          return {
            list: state.test.list,
            counter : state.test.counter
          };
      }
}
FirstController.$inject = ["$ngRedux"]
export default First();


