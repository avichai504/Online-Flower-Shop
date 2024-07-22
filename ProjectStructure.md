# Project File System

```
/project-root
│
├── /client                   # React client-side application
│   ├── /public
│   │   ├── index.html
│   │   └── ...
│   ├── /src
│   │   ├── /assets          # Images, fonts, etc.
│   │   │   └── ...
│   │   ├── /components      # React components
│   │   │   ├── /common      # Common components (e.g., buttons, headers)
│   │   │   ├── /models      # Components for different models (items, users, cart)
│   │   │   ├── /videos      # Components for video handling
│   │   │   └── /canvas      # Components for canvas handling
│   │   ├── /context         # React context for state management
│   │   ├── /hooks           # Custom hooks
│   │   ├── /pages           # Page components (e.g., Home, Login, Cart)
│   │   ├── /services        # API service calls
│   │   ├── /styles          # CSS stylesheets
│   │   ├── /utils           # Utility functions
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── package.json
│
├── /server                   # Node.js server-side application
│   ├── /config               # Configuration files (e.g., database, environment)
│   │   └── db.js
|   |
│   ├── /modules              # Modules for different features
│   │   ├── /User
│   │   │   ├── user.controller.js
│   │   │   ├── user.model.js
│   │   │   ├── user.module.js
│   │   │   └── user.service.js
│   │   ├── /Product
│   │   │   ├── product.controller.js
│   │   │   ├── product.model.js
│   │   │   ├── product.module.js
│   │   │   └── product.service.js
│   │   ├── /Order
│   │   │   ├── order.controller.js
│   │   │   ├── order.model.js
│   │   │   ├── order.module.js
│   │   │   └── order.service.js
│   │   └── /Category
│   │       ├── category.controller.js
│   │       ├── category.model.js
│   │       ├── category.module.js
│   │       └── category.service.js
│   ├── /utils                # Utility functions
│   │   └── ...
│   ├── app.js                # Express app setup
│   ├── server.js             # Server entry point
│   └── package.json
│
├── /scripts                  # Scripts for deployment, database setup, etc.
│   └── ...
├── /data                     # Data for seeding the database
│   └── ...
├── /logs                     # Log files
│   └── ...
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

# Packages to install on the Server side

## Essential Packages

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Body-parser**: Middleware for parsing incoming request bodies.
- **Morgan**: HTTP request logger middleware.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts the server.
- **Bcryptjs**: Library to hash passwords.
- **Jsonwebtoken**: JSON Web Token implementation (if using JWT for authentication).
- **Express-validator**: Set of express.js middlewares that wraps validator.js.
- **Helmet**: Helps you secure your Express apps by setting various HTTP headers.

## Development Packages

- **Eslint**: Linting utility for JavaScript and JSX.
- **Prettier**: Code formatter.

## Installation Command

To install these packages, you can run the following command:

```sh
npm install express mongoose dotenv cors body-parser morgan bcryptjs jsonwebtoken express-validator helmet
npm install --save-dev nodemon eslint prettier
```

# Packages to install on the Client side

## Essential Packages

- **React**: A JavaScript library for building user interfaces.
- **React-DOM**: Serves as the entry point to the DOM and server renderers for React.
- **React-Router-DOM**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for making API requests.
- **Redux**: Predictable state container for JavaScript apps.
- **React-Redux**: Official React bindings for Redux.
- **Redux-Thunk**: Middleware that allows you to write action creators that return a function instead of an action.
- **Styled-components**: Library for React and React Native that allows you to use component-level styles in your application.
- **Prop-types**: Runtime type checking for React props and similar objects.
- **D3.js**: JavaScript library for producing dynamic, interactive data visualizations in web browsers.
- **@testing-library/react**: Simple and complete testing utilities that encourage good testing practices.
- **Jest**: Delightful JavaScript testing framework with a focus on simplicity.
- **@babel/core**: Babel compiler core.
- **@babel/preset-env**: Smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms are needed by your target environment.
- **@babel/preset-react**: Babel preset for all React plugins.

## Development Packages

- **Webpack**: Module bundler for JavaScript applications.
- **Webpack-cli**: CLI for Webpack.
- **Webpack-dev-server**: Development server that provides live reloading.
- **Babel-loader**: Webpack loader for Babel.
- **Eslint**: Linting utility for JavaScript and JSX.
- **Prettier**: Code formatter.
- **Sass**: CSS pre-processor with syntax advancements.

## Installation Command

To install these packages, you can run the following command:

```sh
npm install react react-dom react-router-dom axios redux react-redux redux-thunk styled-components prop-types d3 @testing-library/react jest @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader eslint prettier sass
```
