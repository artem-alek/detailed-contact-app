function Config ($stateProvider, $urlRouterProvider) {
    console.log($stateProvider);
    console.log($urlRouterProvider);
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
    .state('page-not-found', {
        url: '/not-found',
        template: `<h2>No such page. Haha. You're dumb.</h2>`
    });
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;