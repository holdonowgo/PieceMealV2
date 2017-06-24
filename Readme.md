# PieceMeal V2

## Overview
This app is designed for users with dietary restrictions. Piecemeal provides users with recipes and ingredients that do not violate their dietary restrictions. Furthermore, PieceMeal users can explore other user-created recipes for new cooking ideas. PieceMeal users can also set up their own dashboard profile where they can keep track of their favorite recipes, ingredients, and analytical information.

Millions of Americans suffer from food allergies including myself.  These food allergy cost the country approx. $25 billion in loss of productivity.  They are also linked to increased cases of diseases such as asthma and intestinal cancer.  Many food allergy sufferers do not have a convenient was of discovering and managing food recipes that accommodate their dietary restrictions.  Piecemeal attempts to solve this problem as a recipe management system that accommodates dietary restrictions through modularity of ingredients. It allows users with dietary restrictions (allergies etc) who wish to create, organize and discover recipes.

This capstone started with a quarter 2 backend API project deliverable know as Piecemeal API.  The backend RESTful API is written using ES6 Javascript, Node, Express.  Test driven development was used with Mocha, Chai and Supertest in an Agile Git workflow.  Postgres DB in combination with Knex.js and Bookshelf.js were used for data and object modeling.  Facebook Oauth with JWT and Bcrypt were used for token authentication.

The original idea was to create a React/Redux single page app, but we were challenged to use React Native/Redux.  In addition to this, we used the React Native component library NativeBase.io for the front end.  Redux was used to manager local state on the forms and well as various middleware to handle asychronous fetches to our backend.  Facebook Oauth was implemented using Auth0 for single sign on.

What went well was having a well thought out and tested backend.  This included use of Swagger-UI for routing and documentation as wellas thorough data modeling and design of JSON structure.  Pain points included the learning curve required for React-Native including corruption of node_modules folders.  This was because members of the team were not using the same version of NPM.  This caused much heartache and delays.  This problem is to be avoided at all costs in the future.  Oauth flow was also a challenge to nail down as there are many moving parts to the technology.


### Running the App:
To run PieceMeal:

#### iOS

Download & install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the App Store.

To initiate React Native, please run these commands in your terminal:
  - `brew install node` to install node
  - `brew install watchman` to install watchman
  - `npm install -g react-native-cli` to install React-Native's command line interface
  - `npm install rnpm -g
  - `npm install react-native-module --save
  - `rnpm link react-native-module
  - `sudo gem install cocoapods

Then, to open the app in the simulator, run:
  - `react-native run-ios

To view the Swagger UI interface:

```
open http://piecemeal-api.herokuapp.com/api-docs/
```
