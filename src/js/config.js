function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/contact-list.tpl.html',
      controller: 'ContactController'
    })
    .state('contact-new', {
      url: '/contact/new',
      templateUrl: 'templates/contact-create.tpl.html',
      controller: 'ContactController'
    })
    .state('contact', {
      url: '/contact/:contactId',
      templateUrl: 'templates/contact-single.tpl.html',
      controller: 'ContactSingleController'
    })
    .state('page-not-found', {
      url: '/not-found',
      template: '<h2>No such page. Haha. Youre dumb.</h2>'
    });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
