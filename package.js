/* eslint-disable */
Package.describe({
  name: 'ghobbs:accounts-hubspot',
  version: '0.0.1',
  summary: 'Login service for Hubspot accounts',
  git: 'https://github.com/gwhobbs/meteor-accounts-hubspot',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');

  api.use('ecmascript');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);

  api.use('ghobbs:hubspot-oauth@0.0.1');
  api.imply('ghobbs:hubspot-oauth@0.0.1');

  api.use(['accounts-ui'], ['client', 'server'], { weak: true });
  api.addFiles('hubspot.js');
});
