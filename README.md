[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

# simple login app
Simple app with two features: login and see the user's last login

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

## How to use it

Install the dependencies

`npm install`

## Demoing

Execute the next command:
`npm run storybook`
