import TestActions from '../../actions/test/test.action'
const Second = ()=>{
    return {
        restrict : 'E',
        template:require('../second/second.html'),
        controllerAs: 'secondCtrl',
        controller : SecondController
    }
}
class SecondController {
    constructor($scope,$ngRedux){
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TestActions)(this);
        this.list;
        this.counter;
        this.scope = $scope; // if you need scope 
    }

    $onInit(){
       this.prevCounter = null; // initiate a checkable variable 
       this.scope.$watch(()=> this.counter , (data)=>{
        //   this.counter = data;
          debugger
           this.calcPage()
       } , true)
    }

    // $doCheck(){
    //     console.log('$doCheck' , this.counter);
    //     if(this.prevCounter !== this.counter){
    //         this.calcPage()
    //         this.prevCounter = this.counter
    //     }
    // }

    add(value){
        try {
            this.test2Add(value)
        } catch(err) {
            this.error(err)
        }
        
    }


    calcPage() {
        console.log("Building paging: " + this.counter);
        this.page =  `Page is: ` + this.counter;
    }

    mapStateToThis(state){
        return {
            //list: state.test.list,
            counter : state.test.counter
        }
    }

    $onDestroy(){
        this.unsubscribe();
    }
}
SecondController.$inject = ["$scope","$ngRedux"]
export default Second();