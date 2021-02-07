## Expense-Tracker

simple auth page

https://user-images.githubusercontent.com/69234380/107142350-5399c100-6969-11eb-808a-82485a965d3d.mp4
[Demo Video](https://user-images.githubusercontent.com/69234380/107142350-5399c100-6969-11eb-808a-82485a965d3d.mp4)

## **Features**

- checkout account and password
- setting session, keep login status
- logout

## Prerequisites

Node.js

Express

Express-session

Mongodb + Robo 3T

Mongoose

## **Getting Started**

Clone repository to your local computer

```bash
$ git clone https://github.com/ChenSingYo/Login_Page.git
```

Turn on mongodb

```bash
[~] $ cd ~/mongodb/bin/
[~/mongodb/bin] $ ./mongod --dbpath ~/mongodb-data
```

Install [npm](https://www.npmjs.com/) and execute

```bash
$ npm install
$ npm run seed      ..import catagory and record seeder
```

Execute

```bash
$ npm run start     ..automatically run 'node app.js'
```

or

```bash
$ npm -i nodemon
$ npm run dev       ..automatically run 'nodemon app.js'
```

when everything works fine:

```bash
Express is listening on localhost:3000
mongodb connected.
```

let 's check it with your Browser

```
http://localhost:3000
```

test Account

```
email: 'tony@stark.com'
password: 'iamironman'
```

## **Built With**

Npm v7.0.15

Node.js 14.15.1

Nodemon 2.0.6

Express 4.17.1

Mongoose: 5.11.9

Express-session: 1.17.1
## Contributor

[SingYo](https://github.com/ChenSingYo)
