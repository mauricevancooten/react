# ReactJS

Examples illustrating key concepts in [ReactJS](https://facebook.github.io/react/).

## Instructions

For JSX, component, properties, state, stateless functional components, inches to centimetres calculator, router DOM, form field validation and form validation on submit examples.

1. Install dependencies: `npm install`
2. Compile and watch: `npm run compile-watch`

Router DOM example depends on a server side environment.

## Render

Rendering an element.

## JSX

Combining JSX to render elements.

## Component

Component based architecture.

## Properties

Utilising props to render content.

## State

Assinging state to a class.

## Inches to Centimetres Calculator

Assinging state to a class that converts inches to centimetres.

## Stateless Functional Components

Presentational and container components.

## Router DOM

Uses [React Router v4](https://github.com/ReactTraining/react-router) to render components on the server.

## Form Field Validation

Returns warnings and disables submit button if form field are left empty.

## Form Validation On Submit

Returns warnings if field are left empty or email is invalid after submitted.

## Instructions

For server router, data, meta, router fade in fade out, contact form SMTP, CRUD, CRUD redux and OAuth Redux examples.

1. Install dependencies: `npm install`
2. Compile client: `npm run compile`
3. Compile server: `npm run compile-server`
4. Start server: `node server.js`
5. Visit: [http://localhost:3000](http://localhost:3000)

## Server Router

Uses [React Router v4](https://github.com/ReactTraining/react-router) for universal routes to render components on the server.

## Data

Components to render JSON data, includes universal routing with [React Router v4](https://github.com/ReactTraining/react-router) and pagination.

## Meta

Uses [React Helmet](https://github.com/nfl/react-helmet) to render meta titles and descriptions.

## Router Fade In Fade Out

Uses [React Router v4](https://github.com/ReactTraining/react-router) and [React Transition Group v2](https://github.com/reactjs/react-transition-group) to fade routes in and out.

## Contact Form SMTP

Uses [Nodemailer](https://nodemailer.com/about/) to send email over SMTP. Requires a configuration file with your email credentials; IP address, port, user email and password.

`config/keys.js`

``` js
const keys = {
  mtHost: '1.1.1.1',
  mtPort: 111,
  mtUser: 'you@example.com',
  mtPass: 'password'
}

export default keys
```
## CRUD

Requires a [MongoDB](https://www.mongodb.com) installation. Listening on default port: 27017.

Create, read, update and delete, uses [MongoDB](https://www.mongodb.com) to store data.

### N.B.
> Data is not persisted in this example, therefore to update state from the database a browser refresh is required. This example is intended as a stepping stone for the following CRUD Redux example.

## CRUD Redux

Requires a [MongoDB](https://www.mongodb.com) installation. Listening on default port: 27017.

Create, read, update and delete, uses [MongoDB](https://www.mongodb.com) to store data and [Redux](https://redux.js.org/) to persist state.

## OAuth redux

Authorised routes, user login using [Passport](http://www.passportjs.org/) and [Google OAuth 2.0](https://github.com/jaredhanson/passport-google-oauth2)

## Licence

Licensed under the [MIT](https://opensource.org/licenses/MIT) License.
