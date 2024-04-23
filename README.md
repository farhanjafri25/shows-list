<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## About Project

A Listing users favorites feature, made using MongoDb and NestJs

## Technologies used

## Nest Js Framework

- A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- Gives you true flexibility by allowing use of any other libraries.
- Provides Modular Architecture.
- It is helpful in implelmenting design patterns in javascript easily.

### Nodejs/Express

- Node Js is a javascript runtime coupled with ExpressJs framework it allows and helps in creating higly scalable servers easily.

### Mongo DB

- MongoDb is a NoSql database used to build highly available and scalable internet applications.
- Schema Design is flexible

### Mongoose Framework

Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB.

### TypeScript

- Typescript is strongly typed programming language build over javascript.
- It's used to provide typecheck and type errors.

### Module API's
```bash
User Module

@Post('BASE_URL/users/register'): Register a new user
@Get('BASE_URL/users/login'): Login an existing user
```

```bash
Game Module 

@Get('BASE_URL/list'): Returns users saved list
@Post('BASE_URL/list/save'): Saves a user content 
@Delete('BASE_URL/list/:contentId') Delete a user saved content by Id
```

## Key points

1. Design a modular based architecture.
2. Design a simple efficinet schema in mongoose
3. Version Control of Api is handled properly
4. Guards are used for auhentication and authorization of API's.
5. Common Response Interceptor
6. Global Error Handler Middleware
7. Clean code architecture.

## Application takeaways
- Authentication is Done using JWT
- There are 2 API's, Register a user, Login a user, in User Module.
- There are 3 API's in list module for listing CRUD.
- Due to time constraints, I'm not using Redis, can be used for high scalability in constant API's.
- Have tested the API's using Postman.
- Created Tests using spec files using Jest, Due to time constraints all Test cases are not covered.
- Datascripts are not required as i have some data present in my MongoDb so that can work. 
- Deployed the app on Render for public access of API's (https://shows-list.onrender.com)


