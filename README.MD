# SPA Application
This is a simple example of a SPA application using NuxtJS.

This is deployed using now.sh and can be accessed from https://spa-application.now.sh/

# Development
To getting started using this project on your local machine.
1. Install Nuxt
```
$ yarn global add nuxt
```
2. Start nuxt for watching
```
$ yarn dev
```

## Production
If you wish to see project in production mode.
Simply type `yarn build` followed by `yarn start`

## Static Generation
If you wish to get static files for offline usage or static web deployment besides now.
Simply use `yarn generate` and the static files will be generated to the folder `/dist`

# Deployment
To deploy just call the script `deploy`, this will automatically generate static files and push to now's servers.
```
$ yarn deploy
```

_NOTE: This is only a school project / example used at Aarhus Tech in Denmark_