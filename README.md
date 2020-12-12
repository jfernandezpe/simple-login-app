[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

# simple login app
Simple app with two features: login and see the user's last login. It has a lot of over-engenering, but thinking about how to scalete this application it has been a learning for me. Obviously, for a production application with this simple scope I would do a simple development. Probably just 3 web components (app and the two pages) or 5 (with the stateless-stateful pattern) and a couple of repositories using directly axios.

The next step would be splited in several package and create a monorepo with lerna, but I didn't create yet due some problem with the open-wc configuration.

About webpack and rollup, it only has the default open-wc configuration and it may be useful some custom one.

## technological stack
Application created with web components

### Open-wc Starter App
[Open Web Components](https://open-wc.org/) provides guides, tools and libraries for developing web components

#### Scoped
Although [Scoped elements
](https://github.com/open-wc/open-wc/tree/master/packages/scoped-elements) are higthly recommended,  this project does not used because is a overkill for an small app which is a single package. Futhermore Material Design does not support directly this aproach and I would need some hack. If the project grew and were splitted in several packages, it must use it.

### LitElement

A simple base class for creating fast, lightweight web components. [Website](https://lit-element.polymer-project.org/)

### Lion Web Components' Localize 

[Lion web components's localize system](https://lion-web-components.netlify.app/?path=/docs/localize-intro--page) enable to translate web components

## Architecture/structure

This is a small project that has dozen of files, in other words, it has a lot of over-engineering. However I did it because it is an example about how I would scalate the project.

### Aplication

It the piece reponsible of routing, session and other common states or features

### Pages

The main features or modules of the application. Every module must have:

* A main component, which controls the page and comunicate:
  * Comunicate the views with the model
  * Comunicate the app with the module
  * Manage the state
  * etc..
* Componemts: which must be stateless. The should be non reusable components or layouts, otherwise it should be in the reusable components folder

And may have:
* domain: the bussiness logic
* repositories: which comunicate which the API.

### catalog

Catalog of stateless reusable components and layouts

### utils

Reusable libraries

### Config

The app config


## How to use it

Install the dependencies

`npm install`

## Unit test

Execute the unit test and generate a html coverage report

`npm test`

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

## Integration with CD/CI tools 
The project can be integrate in a CD/CI pipeline with the next usefull above commands:

```
npm test
npm run storybook:build 
npm run build```
