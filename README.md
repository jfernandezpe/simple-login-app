[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)
![Deploy to Firebase Hosting](https://github.com/jfernandezpe/simple-login-app/workflows/Deploy%20to%20Firebase%20Hosting%20on%20merge/badge.svg?branch=main)

# simple login app

The porpouse of this app is develop a progressive web app scaffolding made with webcomponents app.

 [You can see a live demo here](https://simple-login-app-ee195.web.app/), any user/password will log in successfuly.

The app has two features: log in and see the user's last log in in the data base (which is mocked). It has a lot of over-engenering, but thinking about how to scalete this application it has been a learning for me and I will use it as template for personal projects.

Obviously, for a production application with this simple scope I would do a simple development, speccialy in the pages. Probably just 3 web components (app and the two pages) or 5 (with the stateless-stateful pattern) and a couple of repositories using directly axios.

The next step would be splited it into several package and create a monorepo with lerna, but I didn't create yet due some problem with the open-wc configuration.

## technological stack
Application created with [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### Open-wc Starter App
[Open Web Components](https://open-wc.org/) provides guides, tools and libraries for developing web components

#### Scoped
Although [Scoped elements
](https://github.com/open-wc/open-wc/tree/master/packages/scoped-elements) are highly recommended, this project does not used because is overkill for a small app which is a single package. Futhermore Material Design does not support directly this aproach and I would need some hack. If the project grew and were splitted it into several packages, it must use it.

### LitElement

A simple base class for creating fast, lightweight web components. [Website](https://lit-element.polymer-project.org/)

### Lion Web Components' Localize 

[Lion web components's localize system](https://lion-web-components.netlify.app/?path=/docs/localize-intro--page) enable to translate web components

### Material design web components

[The Material Web Components (MWC)](https://github.com/material-components/material-components-web-components) are a collection of [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) maintained by Google that implement [Material Design](https://material.io/design/). Used in the most basic UI items (forms, buttons, etc).

### Vaading Router
[Vaadin Router](https://github.com/vaadin/vaadin-router) is a small and powerful client-side router JS library. It uses the widely adopted express.js syntax for routes (/users/:id) to map URLs to Web Component views. 

## Architecture/structure

This is a small project that has dozens of files, in other words, it has a lot of over-engineering. However, I did it because it is an example about how I would scalate the project.

### Application

It the piece reponsible of routing, session and other common states or technical features

### Pages/module

The main features or modules of the application. They communicate to the app with CustomEvents and receive params from the app with properties. They entry point have to be a web component.

Every page or module must be, agnostic, indepence and desacomplate of other pages, modules and the app. They must interact only with the app and repositories. The repositories may know the app session if the app has interceped them.

It is highly recommended every module has:

* A main component, which controls the page and:
  * Communicate the views with the model
  * Communicate the app with the page/module
  * Manage the state
  * etc.
* Visual Components: which must be stateless. They should be non reusable components or layouts, otherwise it should be in the component catalogue

And maybe have:
* domain: the business logic
* repositories: which communicate which the API and may be intercepted by the app

### catalogue

Catalogue of stateless reusable components and layouts

### utils

Reusable libraries

#### Generic Repositories

They are the interface between the pages/modules and the a out of the app storage: API, LocalStorage, Cookies, etc.

It is recommended that allow a method to be intercepted by the app.

##### HttpRepository

Interface with the Http Request. Internally it uses [axios](https://github.com/axios/axios)

How to use it:

```javascript
import { httpRepositoryFactory } from '../utils/repository/HttpRepository/index.js';

const repository = httpRepositoryFactory({ url: yourEndpointUrl });

const body = {
  prop1: 'prop1',
  prop2: 'prop2,
}

repository.get({body})
repository.post({body})
// etc.
```
It provides a method to inject the session token

```javascript 
import { configToken } from '../../utils/repository/HttpRepository/index.js';

const token = 'some-token'
configToken('tokenHeaderName', token);
```

### Config

The app config

## How to use it

Install the dependencies

`npm install`

## Unit test

Execute the unit test and generate a html coverage report
`npm test`

The coverage report is located in the folder `coverage/lcov-report`

### Demoing

Execute the next command:
`npm run storybook`

Generate static storybooks:
`npm run storybook:build`

### Start the app in develop mode
Run the app with a whatcher for your changes. It also includes a mock server
`npm start`

### Build the app
Build a dist version
`npm run build`

### Run the built app
Build a dist version and run the run the app
`npm run start:build`

### Prepare to list:test
Execute the linter and then the tests
`npm run lint:test`

## Integration with CD/CI tools 
The project is integrated with Github’s actions which automatically deploy the app in firebase.

The config is in `.github` folder

Futhermore there are some command that may be usefull in a CD/CI pipeline

```
npm test
npm run storybook:build 
npm run build
npm run lint:test
```


