import TestActions from '../../actions/test/test.action';
const Third = ()=>{
    return {
        restrict : 'E',
        template:require('../third/third.html'),
        controllerAs: 'thirdCtrl',
        controller : ThirdController
    }
}

class ThirdController { 
    constructor($ngRedux ,$scope){
        this.list;
        this.counter;
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TestActions)(this);
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
ThirdController.$inject = ["$ngRedux"]
export default Third();