/* globals Hubspot */
/* eslint-disable */
Accounts.oauth.registerService('hubspot');

if (Meteor.isClient) {
  const loginWithHubspot = function(options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    Hubspot.requestCredential(options, Accounts.oauth.credentialRequestCompleteHandler(callback));
  };

  Accounts.registerClientLoginFunction('hubspot', loginWithHubspot);

  Meteor.loginWithHubspot = function() {
    return Accounts.applyLoginFunction('hubspot', arguments);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.hubspot'],
    forOtherUsers: ['services.hubspot.id'],
  });
}
