[![Code Climate](https://codeclimate.com/github/bradjenn/npm-only/badges/gpa.svg)](https://codeclimate.com/github/bradjenn/npm-only)

# NPM only project
An experimental project using npm only to develop a client side app. No more gulp

Includes the following tools:

- [Browserify](http://browserify.org/)
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [Node Sass](http://sass-lang.com/) (super fast libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [BrowserSync](http://browsersync.io) for live reloading and a static server

### Install npm dependencies
```
$ npm install
```

### Start developing

To start watching files as you develop run
```
$ npm start
```

To run tasks individually, look in the package.json file to see which tasks you can run
```
# npm run task-name
```

#### Tests with Karma
This repo includes a basic js testing setup with the following: [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/).

To run the tests:
```
$ npm test
```
