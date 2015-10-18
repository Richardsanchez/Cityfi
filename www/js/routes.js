angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('signup', {
      url: '/page1',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('cityfy', {
      url: '/page2',
      templateUrl: 'templates/cityfy.html',
      controller: 'cityfyCtrl'
    })

    .state('interests', {
      url: '/page3',
      templateUrl: 'templates/interests.html',
      controller: 'interestsCtrl'
    })
        
      
    
      
        
    .state('atlanta', {
      url: '/page4',
      templateUrl: 'templates/atlanta.html',
      controller: 'atlantaCtrl'
    })
        
      
    
      
        
    .state('hiking', {
      url: '/page5',
      templateUrl: 'templates/hiking.html',
      controller: 'hikingCtrl'
    })
        
      
    
        
      
    
      
        
    .state('newYorkCity', {
      url: '/page8',
      templateUrl: 'templates/newYorkCity.html',
      controller: 'newYorkCityCtrl'
    })
        
      
    
      
        
    .state('seattle', {
      url: '/page9',
      templateUrl: 'templates/seattle.html',
      controller: 'seattleCtrl'
    })
        
      
    
      
        
    .state('sanFrancisco', {
      url: '/page10',
      templateUrl: 'templates/sanFrancisco.html',
      controller: 'sanFranciscoCtrl'
    })
        
      
    
      
        
    .state('losAngeles', {
      url: '/page11',
      templateUrl: 'templates/losAngeles.html',
      controller: 'losAngelesCtrl'
    })

    .state('test', {
      url: '/page13',
      templateUrl: 'templates/test.html',
      controller: 'testCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2');

});