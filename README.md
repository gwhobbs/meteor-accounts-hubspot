# meteor-accounts-hubspot

A login service for Hubspot accounts.


## Getting Started

Add package to your project.
```shellscript
meteor add ghobbs:accounts-hubspot
```

Setup the service configuration for Hubspot.
```javascript
  ServiceConfiguration.configurations.upsert({service: 'hubspot'}, {
    $set: {
      clientId: 'Your_Hubspot_Application_ClientID',
      secret: 'Your_Hubspot_Application_Secret',
      tenant: 'Your_Tenant' // or 'common' for not specific tenant
    }
  })
```

Add your installation URL (as generated in the Hubspot app management UI) to settings.json so that it will be available at `Meteor.settings.public.HubspotInstallationUrl`.

This package depends of other base package named ghobbs:hubspot-oauth, which will be automatically added in your packages.

Enjoy the Hubspot API! :-)

## Credits

This package is based on `lindoelio:accounts-office365`
