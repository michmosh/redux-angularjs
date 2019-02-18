import angular from 'angular';
import '../style/app.css';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import RootReducer from './reducers/index'
import First from '../app/components/first/first.component';
import Second from '../app/components/second/second.component';
import Third from '../app/components/third/third.component';
let app = () => {
  return {
    template: require('./app.html'),
   
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngRedux ])
  .directive('app', app)
  .component('first' , First)
  .component('second' , Second)
  .component('third' , Third)
  .config(($ngReduxProvider)=>{
    $ngReduxProvider.createStoreWith(RootReducer);
  });
  

export default MODULE_NAME;