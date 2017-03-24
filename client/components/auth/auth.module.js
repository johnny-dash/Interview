'use strict';

angular.module('interviewApp.auth', ['interviewApp.constants', 'interviewApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
