angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.game', {
    url: '/game',
    views: {
      'tab1': {
        templateUrl: 'templates/game.html',
        controller: 'gameCtrl'
      }
    }
  })

  .state('tabsController.score', {
    url: '/score',
    views: {
      'tab2': {
        templateUrl: 'templates/score.html',
        controller: 'scoreCtrl'
      }
    }
  })

  .state('tabsController.shopPage', {
    url: '/show',
    views: {
      'tab3': {
        templateUrl: 'templates/shopPage.html',
        controller: 'shopPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.myProfile', {
    url: '/profile',
    views: {
      'tab4': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.answer', {
    url: '/answer',
    views: {
      'tab1': {
        templateUrl: 'templates/answer.html',
        controller: 'answerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/game')


});