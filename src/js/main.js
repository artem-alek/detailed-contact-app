import angular from 'angular';
import 'angular-ui-router';
import AppConfig from './config';
import ContactController from './controllers/contact';
import ContactSingleController from './controllers/contact-single';

angular
    .module('app', ['ui.router'])
    .config(AppConfig)
    .controller('ContactController', ContactController)
    .controller('ContactSingleController', ContactSingleController);
