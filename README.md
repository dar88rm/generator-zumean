# generator-zumean

> A clever [Yeoman](http://yeoman.io) generator for MEAN stack applications. Start coding in a very short time!

### Frameworks Used:
- [AngularJS](https://angular.io/)
- [Bootstrap](http://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Express.js](http://expressjs.com/)
- [Sails.js](http://sailsjs.org/)
- [Mongoose](http://mongoosejs.com/)
- [Bower](https://bower.io/)
- [Gulp](http://gulpjs.com/)
- [Grunt](http://gruntjs.com/)


## Prerequisites

First, install [Yeoman](http://yeoman.io) and generator-zumean using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

Install [Gulp](http://gulpjs.com/)

Install [Bower](https://bower.io/)

Install [Git](https://git-scm.com/)

If you want to generate a Node.js/MongoDB back-end install [Mongo DB](www.mongodb.com) on your machine and start it (mongod).
[Installation guides](http://docs.mongodb.org/manual/installation/)

If you want to use [Sails](http://sailsjs.org/) Framework [install it](http://sailsjs.org/get-started).


## Installation


```bash
npm install -g yo
npm install -g generator-zumean
```

Then create an empty folder and go in it. Now generate your project. Run zumean and answer a few questions.

```bash
yo zumean
```

Now, go in FE directory and launch:
```bash
gulp
```

In 'dist' folder you will find your webapp ready to deploy. 

###### With Sails.js
Copy all the content in dist folder to BE/assets/ and from the directory BE launch:
```bash
npm install
sails lift
```

###### Without Sails.js
Copy all the content in dist folder to BE/public/ and from the directory BE launch:
```bash
npm install
gulp
npm start
```

Your website will be waiting for you at http://localhost:3000/

Enjoy!

If you find this generator useful and would like to support it, you can do so simply by clicking the button below and donating whatever you like.

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/dariodesanctis)
[![Donate](https://img.shields.io/badge/Donate-Bitcoin-blue.svg)](# "bitcoin:37dcoTE2k9YL7twemzP1vddcTbTpLBKhvG")

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).
 * If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), 
 * check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).
 
## What's next?
- [Angular2](https://angularjs.org/)


## License

MIT © [Dario De Sanctis](https://github.com/dar88rm)


