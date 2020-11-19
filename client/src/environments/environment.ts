// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   backendUrl: '/api'
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


export const environment = {
  production: false,
  auth: {
    CLIENT_DOMAIN: 'safe-space.us.auth0.com',
    CLIENT_ID: '7fi7IEnY7UuPX6SvpUG0UG9L33HdnHW5'
  }
};

export const config = {
};