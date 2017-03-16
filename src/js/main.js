import angular from 'angular';
import 'angular-ui-router';
import AppConfig from './config';
import ContactController from './controllers/contact'

angular
    .module('app', ['ui.router'])
    .config(AppConfig)
    .controller('ContactController', ContactController);


